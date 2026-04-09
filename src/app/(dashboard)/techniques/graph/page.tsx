"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  id: string;
  label: string;
  type: "position" | "submission" | "sweep" | "pass";
  color: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

interface Link {
  source: string;
  target: string;
}

const NODES: Node[] = [
  { id: "closed-guard", label: "Closed Guard", type: "position", color: "#3b82f6" },
  { id: "open-guard", label: "Open Guard", type: "position", color: "#3b82f6" },
  { id: "half-guard", label: "Half Guard", type: "position", color: "#3b82f6" },
  { id: "side-control", label: "Side Control", type: "position", color: "#8b5cf6" },
  { id: "mount", label: "Mount", type: "position", color: "#8b5cf6" },
  { id: "back-control", label: "Back Control", type: "position", color: "#8b5cf6" },
  { id: "north-south", label: "North-South", type: "position", color: "#8b5cf6" },
  { id: "armbar", label: "Armbar", type: "submission", color: "#ef4444" },
  { id: "triangle", label: "Triangle", type: "submission", color: "#ef4444" },
  { id: "rear-naked-choke", label: "Rear Naked Choke", type: "submission", color: "#ef4444" },
  { id: "guillotine", label: "Guillotine", type: "submission", color: "#ef4444" },
  { id: "kimura", label: "Kimura", type: "submission", color: "#ef4444" },
  { id: "omoplata", label: "Omoplata", type: "submission", color: "#ef4444" },
  { id: "heel-hook", label: "Heel Hook", type: "submission", color: "#ef4444" },
  { id: "scissor-sweep", label: "Scissor Sweep", type: "sweep", color: "#22c55e" },
  { id: "hip-bump-sweep", label: "Hip Bump Sweep", type: "sweep", color: "#22c55e" },
  { id: "x-guard-sweep", label: "X-Guard Sweep", type: "sweep", color: "#22c55e" },
  { id: "torreando", label: "Torreando Pass", type: "pass", color: "#f59e0b" },
  { id: "knee-slice", label: "Knee Slice", type: "pass", color: "#f59e0b" },
  { id: "leg-drag", label: "Leg Drag", type: "pass", color: "#f59e0b" },
];

const LINKS: Link[] = [
  { source: "closed-guard", target: "armbar" },
  { source: "closed-guard", target: "triangle" },
  { source: "closed-guard", target: "guillotine" },
  { source: "closed-guard", target: "kimura" },
  { source: "closed-guard", target: "omoplata" },
  { source: "closed-guard", target: "scissor-sweep" },
  { source: "closed-guard", target: "hip-bump-sweep" },
  { source: "open-guard", target: "x-guard-sweep" },
  { source: "open-guard", target: "torreando" },
  { source: "open-guard", target: "knee-slice" },
  { source: "open-guard", target: "leg-drag" },
  { source: "half-guard", target: "kimura" },
  { source: "half-guard", target: "heel-hook" },
  { source: "side-control", target: "kimura" },
  { source: "side-control", target: "armbar" },
  { source: "mount", target: "armbar" },
  { source: "mount", target: "triangle" },
  { source: "back-control", target: "rear-naked-choke" },
  { source: "scissor-sweep", target: "mount" },
  { source: "hip-bump-sweep", target: "mount" },
  { source: "x-guard-sweep", target: "open-guard" },
  { source: "torreando", target: "side-control" },
  { source: "knee-slice", target: "side-control" },
  { source: "leg-drag", target: "side-control" },
];

const NODE_DESCRIPTIONS: Record<string, string> = {
  "closed-guard": "Guard with legs locked around opponent's waist. Dominant guard for submissions and sweeps.",
  "open-guard": "Guard with legs open, using feet to frame and control. Platform for sweeps and passes.",
  "half-guard": "One leg trapped between opponent's legs. Great for sweeps and leg lock entries.",
  "side-control": "Dominant pin beside opponent. Wide range of submissions and transitions available.",
  "mount": "Sitting on opponent's chest/hips. Highest dominant position with many submission options.",
  "back-control": "Behind opponent with hooks in. Most dominant position — RNC is high percentage.",
  "north-south": "Head-to-feet pin. Good for kimura and transitioning to other positions.",
  "armbar": "Joint lock on elbow. High percentage from multiple positions.",
  "triangle": "Leg choke trapping arm and neck. Set up from guard and mount.",
  "rear-naked-choke": "Blood choke from back position. The signature back control finish.",
  "guillotine": "Front headlock choke. Catch from guard or standing.",
  "kimura": "Shoulder lock (reverse figure-four). Available from guard, side control, and more.",
  "omoplata": "Shoulder lock using legs from guard. Also a sweep setup.",
  "heel-hook": "Rotational knee/heel pressure. High percentage in no-gi. Use with care.",
  "scissor-sweep": "Scissors motion from closed guard to mount. Classic fundamental sweep.",
  "hip-bump-sweep": "Drive hips up from closed guard. Leads to mount or kimura/guillotine.",
  "x-guard": "Both legs under opponent in open guard. Platform for multiple sweeps.",
  "x-guard-sweep": "Lift and tilt from X-guard to take top position.",
  "torreando": "Bullfighter pass — redirecting legs to side control. Works against most open guards.",
  "knee-slice": "Drive knee through guard, slice to side control. Fundamental guard pass.",
  "leg-drag": "Drag legs to one side to bypass guard. Sets up back takes and side control.",
};

export default function TechniqueGraphPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const isDragging = useRef(false);
  const dragNode = useRef<Node | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const WIDTH = 800;
  const HEIGHT = 600;
  const NODE_RADIUS = 22;

  // Initialize node positions
  useEffect(() => {
    const initialized = NODES.map((n, i) => ({
      ...n,
      x: 150 + (i % 5) * 130 + Math.random() * 40,
      y: 100 + Math.floor(i / 5) * 120 + Math.random() * 40,
      vx: 0,
      vy: 0,
    }));
    nodesRef.current = initialized;
    setNodes(initialized);
  }, []);

  // Force simulation
  useEffect(() => {
    if (nodes.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const simulate = () => {
      const ns = nodesRef.current;

      // Repulsion
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const dx = ns[i].x! - ns[j].x!;
          const dy = ns[i].y! - ns[j].y!;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = 1800 / (dist * dist);
          ns[i].vx! += (dx / dist) * force;
          ns[i].vy! += (dy / dist) * force;
          ns[j].vx! -= (dx / dist) * force;
          ns[j].vy! -= (dy / dist) * force;
        }
      }

      // Attraction along links
      for (const link of LINKS) {
        const s = ns.find((n) => n.id === link.source);
        const t = ns.find((n) => n.id === link.target);
        if (!s || !t) continue;
        const dx = t.x! - s.x!;
        const dy = t.y! - s.y!;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const targetDist = 140;
        const force = (dist - targetDist) * 0.02;
        s.vx! += (dx / dist) * force;
        s.vy! += (dy / dist) * force;
        t.vx! -= (dx / dist) * force;
        t.vy! -= (dy / dist) * force;
      }

      // Center gravity
      const cx = WIDTH / 2;
      const cy = HEIGHT / 2;
      for (const n of ns) {
        n.vx! += (cx - n.x!) * 0.004;
        n.vy! += (cy - n.y!) * 0.004;
      }

      // Apply velocity with damping + boundary
      for (const n of ns) {
        if (dragNode.current?.id === n.id) continue;
        n.vx! *= 0.85;
        n.vy! *= 0.85;
        n.x! += n.vx!;
        n.y! += n.vy!;
        n.x! = Math.max(NODE_RADIUS + 5, Math.min(WIDTH - NODE_RADIUS - 5, n.x!));
        n.y! = Math.max(NODE_RADIUS + 5, Math.min(HEIGHT - NODE_RADIUS - 5, n.y!));
      }

      // Draw
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // Draw links
      for (const link of LINKS) {
        const s = ns.find((n) => n.id === link.source);
        const t = ns.find((n) => n.id === link.target);
        if (!s || !t) continue;
        ctx.beginPath();
        ctx.moveTo(s.x!, s.y!);
        ctx.lineTo(t.x!, t.y!);
        ctx.strokeStyle = "rgba(113, 113, 122, 0.35)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw nodes
      for (const n of ns) {
        const isSelected = selectedNode?.id === n.id;
        const isHovered = hoveredNode === n.id;
        const radius = isSelected || isHovered ? NODE_RADIUS + 4 : NODE_RADIUS;

        // Glow for selected
        if (isSelected) {
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 20;
        }

        ctx.beginPath();
        ctx.arc(n.x!, n.y!, radius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected || isHovered
          ? n.color
          : `${n.color}99`;
        ctx.fill();
        ctx.strokeStyle = n.color;
        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = "#fff";
        ctx.font = `${isSelected ? "bold " : ""}10px system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Word wrap
        const words = n.label.split(" ");
        if (words.length === 1) {
          ctx.fillText(n.label, n.x!, n.y!);
        } else if (words.length === 2) {
          ctx.fillText(words[0], n.x!, n.y! - 5);
          ctx.fillText(words[1], n.x!, n.y! + 7);
        } else {
          ctx.fillText(words.slice(0, 2).join(" "), n.x!, n.y! - 5);
          ctx.fillText(words.slice(2).join(" "), n.x!, n.y! + 7);
        }
      }

      animRef.current = requestAnimationFrame(simulate);
    };

    animRef.current = requestAnimationFrame(simulate);
    return () => cancelAnimationFrame(animRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes.length, selectedNode, hoveredNode]);

  const getNodeAt = (x: number, y: number): Node | null => {
    for (const n of nodesRef.current) {
      const dx = x - n.x!;
      const dy = y - n.y!;
      if (Math.sqrt(dx * dx + dy * dy) <= NODE_RADIUS + 6) return n;
    }
    return null;
  };

  const getCanvasPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const scaleX = WIDTH / rect.width;
    const scaleY = HEIGHT / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasPos(e);
    const n = getNodeAt(x, y);
    setHoveredNode(n?.id || null);
    if (isDragging.current && dragNode.current) {
      dragNode.current.x = x - offsetRef.current.x;
      dragNode.current.y = y - offsetRef.current.y;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasPos(e);
    const n = getNodeAt(x, y);
    if (n) {
      isDragging.current = true;
      dragNode.current = nodesRef.current.find((node) => node.id === n.id) || null;
      if (dragNode.current) {
        offsetRef.current = { x: x - dragNode.current.x!, y: y - dragNode.current.y! };
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging.current) return;
    const { x, y } = getCanvasPos(e);
    const n = getNodeAt(x, y);
    if (n && dragNode.current?.id === n.id) {
      // Only select if not significantly dragged
      const dx = x - (dragNode.current.x! + offsetRef.current.x);
      const dy = y - (dragNode.current.y! + offsetRef.current.y);
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
        setSelectedNode((prev) => (prev?.id === n.id ? null : n));
      }
    }
    isDragging.current = false;
    dragNode.current = null;
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getCanvasPos(e);
    const n = getNodeAt(x, y);
    if (n) {
      setSelectedNode((prev) => (prev?.id === n.id ? null : n));
    } else {
      setSelectedNode(null);
    }
  };

  const connectedNodes = selectedNode
    ? LINKS.filter(
        (l) => l.source === selectedNode.id || l.target === selectedNode.id
      ).map((l) => (l.source === selectedNode.id ? l.target : l.source))
    : [];

  const LEGEND = [
    { color: "#3b82f6", label: "Guard (attacker)" },
    { color: "#8b5cf6", label: "Dominant Position" },
    { color: "#ef4444", label: "Submission" },
    { color: "#22c55e", label: "Sweep" },
    { color: "#f59e0b", label: "Pass" },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Technique Graph</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Explore BJJ techniques and their connections. Click a node to see details.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Canvas */}
        <div className="flex-1 rounded-xl border border-zinc-800 overflow-hidden bg-zinc-950">
          <canvas
            ref={canvasRef}
            width={WIDTH}
            height={HEIGHT}
            className="w-full h-auto cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            onMouseLeave={() => setHoveredNode(null)}
            style={{ maxHeight: "520px" }}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:w-72 space-y-4">
          {/* Legend */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <h3 className="text-sm font-semibold text-zinc-300 mb-3">Legend</h3>
            <div className="space-y-2">
              {LEGEND.map((l) => (
                <div key={l.label} className="flex items-center gap-2.5">
                  <div
                    className="h-3.5 w-3.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: l.color }}
                  />
                  <span className="text-xs text-zinc-400">{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Node details */}
          {selectedNode ? (
            <div className="rounded-xl border bg-zinc-900/50 p-4" style={{ borderColor: selectedNode.color + "50" }}>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="h-4 w-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: selectedNode.color }}
                />
                <h3 className="text-sm font-bold text-white">{selectedNode.label}</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                {NODE_DESCRIPTIONS[selectedNode.id] || "Click to explore connections."}
              </p>
              <div>
                <p className="text-xs font-medium text-zinc-500 mb-2">Connected techniques:</p>
                <div className="flex flex-wrap gap-1.5">
                  {connectedNodes.map((id) => {
                    const n = NODES.find((node) => node.id === id);
                    return n ? (
                      <button
                        key={id}
                        onClick={() => setSelectedNode(n)}
                        className="text-xs px-2 py-1 rounded-full border transition-colors hover:opacity-80"
                        style={{
                          borderColor: n.color + "60",
                          color: n.color,
                          backgroundColor: n.color + "15",
                        }}
                      >
                        {n.label}
                      </button>
                    ) : null;
                  })}
                  {connectedNodes.length === 0 && (
                    <span className="text-xs text-zinc-600">No direct connections</span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
              <p className="text-sm text-zinc-500">Click any node to see details and connections</p>
            </div>
          )}

          <p className="text-xs text-zinc-600 text-center">Drag nodes to rearrange · Click to select</p>
        </div>
      </div>
    </div>
  );
}
