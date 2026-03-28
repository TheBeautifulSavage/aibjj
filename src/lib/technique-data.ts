export type TechniquePosition =
  | "Guard"
  | "Mount"
  | "Side Control"
  | "Back"
  | "Standing"
  | "Turtle"
  | "Half Guard";

export type TechniqueCategory =
  | "Submissions"
  | "Sweeps"
  | "Passes"
  | "Escapes"
  | "Takedowns"
  | "Transitions";

export type BeltLevel = "WHITE" | "BLUE" | "PURPLE" | "BROWN" | "BLACK";

export interface Technique {
  id: string;
  name: string;
  description: string;
  position: TechniquePosition;
  category: TechniqueCategory;
  beltLevel: BeltLevel;
  videoUrl?: string;
  steps: string[];
  tips: string[];
  relatedTechniqueIds?: string[];
}

export const POSITIONS: TechniquePosition[] = [
  "Guard",
  "Mount",
  "Side Control",
  "Back",
  "Standing",
  "Turtle",
  "Half Guard",
];

export const CATEGORIES: TechniqueCategory[] = [
  "Submissions",
  "Sweeps",
  "Passes",
  "Escapes",
  "Takedowns",
  "Transitions",
];

export const BELT_LEVELS: BeltLevel[] = [
  "WHITE",
  "BLUE",
  "PURPLE",
  "BROWN",
  "BLACK",
];

export const TECHNIQUES: Technique[] = [
  // ── Guard Submissions ──
  {
    id: "t-001",
    name: "Armbar from Closed Guard",
    description:
      "A fundamental submission from closed guard where you isolate the opponent's arm and hyperextend the elbow joint using your hips.",
    position: "Guard",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "Control opponent's posture by pulling their head down with both hands on the back of the head.",
      "Secure a cross-grip on the wrist of the arm you want to attack.",
      "Place your foot on the hip on the same side as the trapped arm.",
      "Open your guard and pivot your hips out at a 90-degree angle.",
      "Swing your leg over the opponent's head, keeping it tight.",
      "Pinch your knees together, squeeze the arm against your chest, and bridge your hips upward for the finish.",
    ],
    tips: [
      "Keep your hips high and tight against the opponent's shoulder.",
      "Control the thumb-up grip to prevent them from stacking.",
      "Pinch your knees together to prevent escape.",
    ],
    relatedTechniqueIds: ["t-002", "t-004"],
  },
  {
    id: "t-002",
    name: "Triangle Choke from Guard",
    description:
      "A powerful blood choke applied with the legs from closed guard. You trap the opponent's head and one arm inside the triangle formed by your legs.",
    position: "Guard",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From closed guard, control one wrist and push the other arm across.",
      "Open guard, place one foot on the hip, and shoot the other leg up and over the opponent's neck.",
      "Lock the triangle by placing the back of your knee over your ankle.",
      "Pull the opponent's head down and angle your body perpendicular.",
      "Squeeze your knees together and lift your hips to finish the choke.",
    ],
    tips: [
      "Angle off to the side for a tighter choke.",
      "Pull the trapped arm across your body.",
      "If the choke is not working, transition to an armbar.",
    ],
    relatedTechniqueIds: ["t-001", "t-003"],
  },
  {
    id: "t-003",
    name: "Kimura from Closed Guard",
    description:
      "A shoulder lock applied from closed guard by controlling the opponent's wrist and elbow, then rotating the arm behind their back.",
    position: "Guard",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From closed guard, sit up and overhook the opponent's arm.",
      "Grab your own wrist with a figure-four grip around their wrist.",
      "Fall back to the mat while maintaining the grip.",
      "Keep your guard closed and control their posture.",
      "Paint the opponent's hand toward the ceiling in an arc behind their back.",
    ],
    tips: [
      "Keep your elbows tight to your body for maximum leverage.",
      "If they straighten the arm, switch to a straight armbar.",
      "Use the hip bump setup to create the opening.",
    ],
    relatedTechniqueIds: ["t-001", "t-005"],
  },
  {
    id: "t-004",
    name: "Omoplata",
    description:
      "A shoulder lock using your legs to control and hyperrotate the opponent's shoulder. Can also be used as a sweep or to set up other attacks.",
    position: "Guard",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From closed guard, control a same-side sleeve grip and break their posture.",
      "Open guard and swing your leg over their shoulder and across the back of their neck.",
      "Sit up and face the same direction as your opponent.",
      "Control their hips to prevent the forward roll escape.",
      "Lean forward over their trapped arm to apply the shoulder lock.",
    ],
    tips: [
      "Control the opponent's belt or far hip to prevent the roll.",
      "If they roll, follow and take top position.",
      "Combine with triangle and armbar for a dangerous attack chain.",
    ],
    relatedTechniqueIds: ["t-001", "t-002"],
  },
  // ── Guard Sweeps ──
  {
    id: "t-005",
    name: "Hip Bump Sweep",
    description:
      "An explosive sweep from closed guard where you sit up and drive your opponent backward using hip momentum and an overhook.",
    position: "Guard",
    category: "Sweeps",
    beltLevel: "WHITE",
    steps: [
      "From closed guard, wait for the opponent to sit up or create space.",
      "Open your guard and plant one hand on the mat behind you.",
      "Sit up explosively, reaching over the opponent's far shoulder.",
      "Drive your hips forward and bump them off balance.",
      "Follow through to mount position.",
    ],
    tips: [
      "Timing is everything — sweep as they sit back.",
      "If they post a hand, grab the wrist for a kimura or guillotine.",
      "Use your core, not just your arms, for the sweep.",
    ],
    relatedTechniqueIds: ["t-003", "t-006"],
  },
  {
    id: "t-006",
    name: "Scissor Sweep",
    description:
      "A classic guard sweep using a knee shield and pulling motion to topple the opponent sideways, ending in mount.",
    position: "Guard",
    category: "Sweeps",
    beltLevel: "WHITE",
    steps: [
      "From closed guard, secure a collar grip and a sleeve grip.",
      "Open guard and place your shin across the opponent's stomach as a knee shield.",
      "Chop your bottom leg backward to take out their base.",
      "Simultaneously pull with your grips and push with the knee shield.",
      "Follow through and establish mount.",
    ],
    tips: [
      "Load the opponent's weight onto you before sweeping.",
      "Keep the shin shield high across the chest for more power.",
      "Angle your body slightly to the side before executing.",
    ],
    relatedTechniqueIds: ["t-005", "t-007"],
  },
  {
    id: "t-007",
    name: "Flower Sweep (Pendulum Sweep)",
    description:
      "A powerful sweep from closed guard using a pendulum motion of the legs to generate momentum and topple the opponent.",
    position: "Guard",
    category: "Sweeps",
    beltLevel: "WHITE",
    steps: [
      "From closed guard, grip the opponent's same-side sleeve and cross-collar.",
      "Open your guard and swing your outside leg out wide like a pendulum.",
      "Hook the opponent's far leg with your other leg.",
      "Swing the pendulum leg up and over, generating momentum.",
      "Roll them over and come up to mount.",
    ],
    tips: [
      "The wider the pendulum swing, the more momentum you generate.",
      "Block their far leg to prevent them from posting.",
      "Time it when their weight is committed forward.",
    ],
    relatedTechniqueIds: ["t-005", "t-006"],
  },
  // ── Mount Submissions ──
  {
    id: "t-008",
    name: "Americana from Mount",
    description:
      "A shoulder lock from mount position where you pin the opponent's wrist to the mat and use a figure-four grip to rotate their shoulder.",
    position: "Mount",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From mount, pin the opponent's wrist to the mat beside their head.",
      "Slide your other hand under their elbow and grab your own wrist.",
      "Keep your elbows tight and your weight low on the opponent.",
      "Lift the elbow while keeping the wrist pinned to the mat.",
      "Slowly paint their hand in an arc toward their hip to finish.",
    ],
    tips: [
      "Keep your head low and weight heavy on the opponent.",
      "Do not let them bridge — maintain strong base.",
      "Works best when opponent frames against your neck.",
    ],
    relatedTechniqueIds: ["t-009", "t-010"],
  },
  {
    id: "t-009",
    name: "Cross Collar Choke from Mount",
    description:
      "A gi choke from mount using both hands gripping deep into the opponent's collar to create a powerful cross-choke.",
    position: "Mount",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From mount, get a deep cross-collar grip with your first hand, four fingers inside.",
      "Maintain posture and base while securing the grip.",
      "Feed your second hand to the other side of the collar, thumb inside.",
      "Drop your elbows to the mat beside the opponent's head.",
      "Expand your chest and squeeze your elbows together to finish.",
    ],
    tips: [
      "The first grip must be very deep — aim past the tag line.",
      "Stay patient — rushing leads to losing the mount.",
      "Use the threat of the choke to open up armbar opportunities.",
    ],
    relatedTechniqueIds: ["t-008", "t-011"],
  },
  {
    id: "t-010",
    name: "Arm Triangle from Mount",
    description:
      "A head-and-arm choke where you trap the opponent's arm against their own neck and squeeze to cut off blood flow.",
    position: "Mount",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From mount, drive the opponent's arm across their face using shoulder pressure.",
      "Thread your arm under their head and lock a gable grip or clasp hands.",
      "Slide to side control on the trapped-arm side.",
      "Walk your hips toward the opponent's head to tighten the choke.",
      "Squeeze your arms together and drop your shoulder to finish.",
    ],
    tips: [
      "The key is getting their arm tight against their neck.",
      "Sprawl your legs back for extra pressure.",
      "Be patient transitioning to side control — do not lose the lock.",
    ],
    relatedTechniqueIds: ["t-008", "t-009"],
  },
  {
    id: "t-011",
    name: "S-Mount Armbar",
    description:
      "A high-percentage armbar from mount using the S-mount position, which gives excellent control and finishing leverage.",
    position: "Mount",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From high mount, slide one knee up into the opponent's armpit.",
      "Post your foot next to their head on the opposite side (S-mount).",
      "Isolate the near arm by hugging it to your chest.",
      "Fall back, swinging your posted leg over their face.",
      "Pinch your knees, control the wrist, and bridge for the finish.",
    ],
    tips: [
      "Establish high mount first for better control.",
      "The S-mount foot post prevents them from turning into you.",
      "Keep the arm tight to your chest throughout the transition.",
    ],
    relatedTechniqueIds: ["t-001", "t-009"],
  },
  {
    id: "t-012",
    name: "Ezekiel Choke from Mount",
    description:
      "A sneaky gi choke from mount where you thread your hand inside your own sleeve and wrap around the opponent's neck.",
    position: "Mount",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From mount, slide one arm under the opponent's head.",
      "Feed your other hand into your own sleeve on the arm that is under the head.",
      "Bring the sleeved hand across the opponent's throat.",
      "Squeeze both arms together like a guillotine motion.",
      "Drop your weight and finish the choke.",
    ],
    tips: [
      "Keep your mount tight — do not let them buck you off while setting up.",
      "The sleeve grip hand does most of the choking work.",
      "Also works from inside closed guard as a surprise attack.",
    ],
    relatedTechniqueIds: ["t-009", "t-008"],
  },
  // ── Side Control ──
  {
    id: "t-013",
    name: "Kimura from Side Control",
    description:
      "A shoulder lock from side control targeting the near arm using a figure-four grip to rotate the shoulder joint.",
    position: "Side Control",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From side control, bait the opponent to push against you with their near arm.",
      "Trap their wrist with your near hand.",
      "Thread your far arm under their elbow and grab your own wrist.",
      "Step over their head to north-south if needed for leverage.",
      "Paint their hand behind their back to finish the lock.",
    ],
    tips: [
      "Use knee-on-belly to create a reaction that exposes the arm.",
      "Keep heavy top pressure throughout.",
      "If they straighten the arm, transition to a straight armbar.",
    ],
    relatedTechniqueIds: ["t-003", "t-014"],
  },
  {
    id: "t-014",
    name: "Americana from Side Control",
    description:
      "A shoulder lock from side control pinning the opponent's near wrist and rotating the shoulder with a figure-four grip.",
    position: "Side Control",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From side control, pin the opponent's near wrist to the mat.",
      "Slide your other arm under their elbow and grab your own wrist.",
      "Keep chest-to-chest pressure on the opponent.",
      "Lift their elbow off the mat while keeping the wrist pinned.",
      "Slowly rotate the arm toward their hip to finish.",
    ],
    tips: [
      "Works best when their arm is bent at 90 degrees.",
      "Keep your weight heavy to prevent them bridging into you.",
      "Combine with the kimura for a two-attack system.",
    ],
    relatedTechniqueIds: ["t-008", "t-013"],
  },
  {
    id: "t-015",
    name: "North-South Choke",
    description:
      "A choke from north-south position using your arm and shoulder pressure to compress the opponent's carotid arteries.",
    position: "Side Control",
    category: "Submissions",
    beltLevel: "PURPLE",
    steps: [
      "From side control, transition to north-south by walking around toward the opponent's head.",
      "Thread your choking arm under the opponent's near-side neck.",
      "Sprawl your hips low and heavy on their chest.",
      "Grip your own thigh or use a gable grip for reinforcement.",
      "Walk your hips toward the choking-arm side to tighten.",
    ],
    tips: [
      "Hip pressure is essential — the choke will not work without it.",
      "Keep your sprawl tight with toes driving into the mat.",
      "It is a slow, grinding choke — be patient.",
    ],
    relatedTechniqueIds: ["t-013", "t-016"],
  },
  {
    id: "t-016",
    name: "Paper Cutter Choke",
    description:
      "A devastating gi choke from side control using a deep lapel grip and a slicing forearm motion across the throat.",
    position: "Side Control",
    category: "Submissions",
    beltLevel: "PURPLE",
    steps: [
      "From side control, feed your far hand deep into the opponent's far lapel.",
      "Secure a strong cross-face grip with the near hand.",
      "Shift your weight onto the opponent's chest.",
      "Slide your lapel-gripping forearm across their throat like cutting paper.",
      "Drop your elbow to the mat to finish the choke.",
    ],
    tips: [
      "The deeper the lapel grip, the tighter the choke.",
      "Use your body weight, not just arm strength.",
      "Control the near-side arm first to prevent defense.",
    ],
    relatedTechniqueIds: ["t-015", "t-017"],
  },
  {
    id: "t-017",
    name: "Knee on Belly Transition",
    description:
      "A dominant transitional position from side control that creates intense pressure and opens up submissions and further transitions.",
    position: "Side Control",
    category: "Transitions",
    beltLevel: "WHITE",
    steps: [
      "From side control, grip the far collar and near-side pants or belt.",
      "Post your near-side knee on the opponent's solar plexus or lower belly.",
      "Extend your far leg out for base.",
      "Drive your weight down through the knee.",
      "Use their reactions (pushing, turning) to set up submissions or take the back.",
    ],
    tips: [
      "Keep your weight centered over the posted knee.",
      "Do not sit fully on them — stay light and mobile.",
      "If they push your knee, transition to mount or armbar.",
    ],
    relatedTechniqueIds: ["t-013", "t-014"],
  },
  // ── Back ──
  {
    id: "t-018",
    name: "Rear Naked Choke",
    description:
      "The highest-percentage submission in BJJ. A blood choke applied from back control using a figure-four arm configuration around the neck.",
    position: "Back",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "From back control with hooks in, fight for an underhook under the chin.",
      "Slide your choking arm under the opponent's chin with the blade of your forearm against the throat.",
      "Place the choking hand on the bicep of your other arm.",
      "Place the reinforcing hand behind the opponent's head.",
      "Squeeze your elbows together and expand your chest to finish.",
    ],
    tips: [
      "If they tuck their chin, use a hand-fighting sequence to get under.",
      "Keep your hooks active and your chest glued to their back.",
      "The squeeze comes from your chest and back, not just your arms.",
    ],
    relatedTechniqueIds: ["t-019", "t-020"],
  },
  {
    id: "t-019",
    name: "Bow and Arrow Choke",
    description:
      "A powerful gi choke from back control using the collar and the opponent's far leg to create a stretching, choking pressure.",
    position: "Back",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From back control, secure a deep cross-collar grip with four fingers inside.",
      "Use your other hand to grab the opponent's far-side pants at the knee.",
      "Remove the hook on the pants-grip side.",
      "Extend your legs and pull the collar grip and pants grip in opposite directions.",
      "Stretch them out like drawing a bow and arrow to finish the choke.",
    ],
    tips: [
      "The collar grip must be deep — four fingers past the neck.",
      "Keep the other hook active to maintain control.",
      "If they defend, transition to an armbar.",
    ],
    relatedTechniqueIds: ["t-018", "t-020"],
  },
  {
    id: "t-020",
    name: "Armbar from Back",
    description:
      "An armbar applied from back control when the opponent defends choke attempts by exposing their arm.",
    position: "Back",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From back control, attempt a choke to get the opponent to use both hands to defend their neck.",
      "Trap one arm by securing a two-on-one grip on their wrist.",
      "Rotate your body to the trapped-arm side.",
      "Swing your top leg over their face.",
      "Extend your hips and pinch your knees to finish the armbar.",
    ],
    tips: [
      "Use the choke threat to bait the arm defense.",
      "Keep your hooks in as long as possible for control.",
      "If they roll, follow and maintain the armbar position.",
    ],
    relatedTechniqueIds: ["t-018", "t-019"],
  },
  // ── Standing / Takedowns ──
  {
    id: "t-021",
    name: "Double Leg Takedown",
    description:
      "The most fundamental wrestling takedown. Shoot in on both legs, drive through the opponent, and take them to the mat.",
    position: "Standing",
    category: "Takedowns",
    beltLevel: "WHITE",
    steps: [
      "Establish a collar tie or wrist control to set up the entry.",
      "Drop your level by bending your knees, not your waist.",
      "Penetration step — drive your lead knee between the opponent's legs.",
      "Wrap both arms behind their knees, locking your hands.",
      "Drive forward with your shoulder in their midsection and run them to the mat.",
      "Establish side control or pass immediately.",
    ],
    tips: [
      "Change levels before shooting to avoid getting sprawled on.",
      "Keep your head up — never bury your head.",
      "Chain with a single leg if they sprawl on the initial shot.",
    ],
    relatedTechniqueIds: ["t-022", "t-024"],
  },
  {
    id: "t-022",
    name: "Single Leg Takedown",
    description:
      "A versatile takedown targeting one leg. Multiple finishes including running the pipe, lifting, and tripping.",
    position: "Standing",
    category: "Takedowns",
    beltLevel: "WHITE",
    steps: [
      "Set up with an inside tie or wrist control.",
      "Change levels and shoot in on the lead leg.",
      "Wrap your arms around the thigh, clasping your hands.",
      "Stand up with the leg secured against your chest.",
      "Run the pipe by driving their knee laterally across their body, or lift and trip.",
    ],
    tips: [
      "Keep the captured leg tight against your chest.",
      "Your head should be on the inside, pressed against their ribs.",
      "If they whizzer, switch to a double leg or inside trip.",
    ],
    relatedTechniqueIds: ["t-021", "t-023"],
  },
  {
    id: "t-023",
    name: "Osoto Gari (Major Outer Reap)",
    description:
      "A classic judo throw where you reap the opponent's leg from the outside while driving them backward off balance.",
    position: "Standing",
    category: "Takedowns",
    beltLevel: "WHITE",
    steps: [
      "Establish a standard collar-and-sleeve grip (or clinch in no-gi).",
      "Step your lead foot next to the opponent's lead foot.",
      "Pull them forward and to the side to break their balance.",
      "Swing your rear leg behind their same-side leg in a sweeping motion.",
      "Drive them backward with your upper body while reaping the leg.",
    ],
    tips: [
      "Kuzushi (off-balancing) is the most important part.",
      "Commit fully — half-hearted attempts lead to counters.",
      "Follow the throw down and immediately establish side control.",
    ],
    relatedTechniqueIds: ["t-021", "t-024"],
  },
  {
    id: "t-024",
    name: "Arm Drag to Back Take",
    description:
      "A quick, low-risk technique to clear the opponent's arm and spin behind them to take the back from standing or seated positions.",
    position: "Standing",
    category: "Takedowns",
    beltLevel: "WHITE",
    steps: [
      "From a standing engagement or seated guard, grip the opponent's wrist and tricep.",
      "Pull their arm across your body explosively.",
      "Circle step behind them as their arm clears your body.",
      "Secure a seatbelt grip (over-under around their torso).",
      "Take them down or pull them into back control.",
    ],
    tips: [
      "Speed and timing are more important than strength.",
      "Works in gi and no-gi — use a two-on-one grip in no-gi.",
      "Chain with a single leg if the back take fails.",
    ],
    relatedTechniqueIds: ["t-021", "t-018"],
  },
  // ── Escapes ──
  {
    id: "t-025",
    name: "Bridge and Roll (Upa) from Mount",
    description:
      "The fundamental mount escape using a powerful hip bridge to unbalance and roll the opponent, ending in their closed guard.",
    position: "Mount",
    category: "Escapes",
    beltLevel: "WHITE",
    steps: [
      "Trap one of the opponent's arms by hugging it to your chest.",
      "Trap their same-side foot with your foot.",
      "Bridge explosively upward and to the trapped-arm side.",
      "Roll the opponent over into their guard.",
      "Begin working to pass their guard.",
    ],
    tips: [
      "Bridge high, then turn — do not just roll sideways.",
      "Trap the arm AND the foot on the same side.",
      "Time the bridge when they reach for a submission.",
    ],
    relatedTechniqueIds: ["t-026", "t-008"],
  },
  {
    id: "t-026",
    name: "Elbow-Knee Escape from Mount",
    description:
      "A systematic mount escape creating a frame with your elbow and knee to recover half guard or full guard.",
    position: "Mount",
    category: "Escapes",
    beltLevel: "WHITE",
    steps: [
      "From bottom mount, frame against the opponent's hip with your forearm.",
      "Shrimp your hips to create space on one side.",
      "Insert your knee into the gap between your elbow and their hip.",
      "Continue shrimping to work your leg fully through.",
      "Recover half guard, then work to full guard.",
    ],
    tips: [
      "Stay on your side during the escape — do not lie flat.",
      "Small, persistent shrimps are better than one big motion.",
      "Alternate between upa and elbow-knee to keep them guessing.",
    ],
    relatedTechniqueIds: ["t-025", "t-027"],
  },
  {
    id: "t-027",
    name: "Guard Recovery from Side Control",
    description:
      "The essential escape from bottom side control using frames and hip movement to create space and reguard.",
    position: "Side Control",
    category: "Escapes",
    beltLevel: "WHITE",
    steps: [
      "Frame against the opponent's neck with your near-side forearm and their hip with the other.",
      "Bridge into them to create initial space.",
      "Shrimp your hips away from them.",
      "Insert your near-side knee as a shield between you and the opponent.",
      "Continue shrimping and work to full guard or butterfly guard.",
    ],
    tips: [
      "Never let them settle — start escaping immediately.",
      "Protect your neck from crossface and chokes first.",
      "Chain with the underhook escape if they block your knee.",
    ],
    relatedTechniqueIds: ["t-025", "t-026"],
  },
  {
    id: "t-028",
    name: "Back Escape (Shoulder to Mat)",
    description:
      "The primary escape from back control by fighting the hands, getting your shoulders to the mat, and working to side control or guard.",
    position: "Back",
    category: "Escapes",
    beltLevel: "WHITE",
    steps: [
      "Immediately protect your neck by gripping the opponent's choking hand with both hands.",
      "Start clearing the top hook by pushing it down with your hand.",
      "Slide your hips to the mat on the side of the cleared hook.",
      "Turn into the opponent, getting your shoulders flat on the mat.",
      "Work to establish side control or recover guard.",
    ],
    tips: [
      "Fight the hands first — choke defense is always priority one.",
      "Escape toward the side where their choking arm is.",
      "Keep your chin tucked throughout the escape.",
    ],
    relatedTechniqueIds: ["t-018", "t-027"],
  },
  // ── Guard Passes ──
  {
    id: "t-029",
    name: "Toreando Pass (Bullfighter Pass)",
    description:
      "A fast, dynamic guard pass where you grip the opponent's legs and throw them to the side while you circle around to side control.",
    position: "Guard",
    category: "Passes",
    beltLevel: "WHITE",
    steps: [
      "Stand up in the opponent's open guard and grip both pants at the knees (or shins in no-gi).",
      "Push one leg down while throwing the other across their body.",
      "Circle quickly to the side in the direction you threw the legs.",
      "Drop your hips and establish chest-to-chest side control.",
      "Secure crossface and underhook to consolidate the position.",
    ],
    tips: [
      "Speed is essential — do not pause midway through.",
      "Control the legs until you are past the knees.",
      "Mix in feints to both sides to keep the guard player reacting.",
    ],
    relatedTechniqueIds: ["t-030", "t-031"],
  },
  {
    id: "t-030",
    name: "Knee Slice Pass",
    description:
      "A fundamental guard pass where you slide your knee across the opponent's thigh to split their guard and achieve side control.",
    position: "Half Guard",
    category: "Passes",
    beltLevel: "WHITE",
    steps: [
      "From top half guard or headquarters position, secure a crossface and underhook.",
      "Place your knee across the opponent's thigh, pointing your toes outward.",
      "Drive your knee to the mat, slicing through their guard.",
      "Free your trapped leg by windshield-wipering it out.",
      "Settle into side control with good chest pressure.",
    ],
    tips: [
      "Your crossface must be strong to prevent them from turning into you.",
      "Stay low and heavy throughout the pass.",
      "If they get an underhook, switch to a mount transition.",
    ],
    relatedTechniqueIds: ["t-029", "t-032"],
  },
  {
    id: "t-031",
    name: "Over-Under Pass",
    description:
      "A crushing pressure pass from standing or kneeling where one arm goes over and one under the opponent's legs to stack and pass.",
    position: "Guard",
    category: "Passes",
    beltLevel: "BLUE",
    steps: [
      "From inside the opponent's open guard, drive one arm over their thigh and one under the other.",
      "Lock your hands together (gable grip) and pull the legs tight.",
      "Drive forward, stacking the opponent and using heavy shoulder pressure.",
      "Walk around to the under-hook side.",
      "Clear the legs and establish side control.",
    ],
    tips: [
      "Keep your head on the over side to prevent triangles.",
      "Use constant forward pressure — never let them create space.",
      "This is a slow, grinding pass — be patient.",
    ],
    relatedTechniqueIds: ["t-029", "t-033"],
  },
  {
    id: "t-032",
    name: "Leg Drag Pass",
    description:
      "A modern guard pass where you drag the opponent's leg across your body, pinning it with your hip to pass directly to side control or back.",
    position: "Guard",
    category: "Passes",
    beltLevel: "BLUE",
    steps: [
      "From standing in open guard, grip the opponent's ankle and pants at the knee.",
      "Drag their leg across your body to the opposite side.",
      "Step over and pin their leg with your near-side hip.",
      "Secure an underhook or seatbelt grip.",
      "Settle into side control or take the back.",
    ],
    tips: [
      "The pin of their leg is critical — do not let it pop out.",
      "This pass flows naturally into back takes.",
      "Works great in combination with the toreando pass.",
    ],
    relatedTechniqueIds: ["t-029", "t-030"],
  },
  {
    id: "t-033",
    name: "Stack Pass",
    description:
      "A powerful guard pass where you stack the opponent's hips over their shoulders, compressing them, and walk around to pass.",
    position: "Guard",
    category: "Passes",
    beltLevel: "WHITE",
    steps: [
      "From inside closed guard, stand up with good posture and break the guard open.",
      "Secure an underhook on one leg and grip the collar or control the head.",
      "Drive the opponent's knees toward their face, stacking their hips up.",
      "Walk around toward the underhook side while maintaining the stack.",
      "Clear the legs and settle into side control.",
    ],
    tips: [
      "Keep your weight driving forward through the stack.",
      "Do not let them scoot their hips back to create space.",
      "Control the head to prevent them from turning.",
    ],
    relatedTechniqueIds: ["t-029", "t-031"],
  },
  // ── Turtle ──
  {
    id: "t-034",
    name: "Clock Choke from Turtle",
    description:
      "A gi choke applied against a turtled opponent by gripping the collar and walking around in a clock-like motion to tighten the choke.",
    position: "Turtle",
    category: "Submissions",
    beltLevel: "BLUE",
    steps: [
      "From behind the turtled opponent, secure a deep cross-collar grip with four fingers inside.",
      "Place your other hand on their far hip for control.",
      "Post your head on the mat next to their near hip.",
      "Walk your legs in a circular motion (like a clock) toward their head.",
      "The collar grip tightens as you walk around — finish by driving your hips down.",
    ],
    tips: [
      "The deeper the collar grip, the faster the choke.",
      "Keep your hips low as you walk around.",
      "If they roll, follow and maintain the collar grip.",
    ],
    relatedTechniqueIds: ["t-035", "t-018"],
  },
  {
    id: "t-035",
    name: "Turtle to Back Take (Seatbelt)",
    description:
      "A fundamental back take against a turtled opponent using the seatbelt grip and hook insertion.",
    position: "Turtle",
    category: "Transitions",
    beltLevel: "WHITE",
    steps: [
      "From behind the turtled opponent, establish a seatbelt grip (one arm over the shoulder, one under the armpit).",
      "Keep your chest tight against their back.",
      "Sit to the side of the overhook arm (choking arm side).",
      "Insert your bottom hook first, then the top hook.",
      "Secure full back control and begin attacking the neck.",
    ],
    tips: [
      "Always sit to the choking-arm side.",
      "Insert hooks methodically — bottom first, then top.",
      "If they try to roll, follow them and maintain the seatbelt.",
    ],
    relatedTechniqueIds: ["t-018", "t-034"],
  },
  // ── Half Guard ──
  {
    id: "t-036",
    name: "Old School Sweep (Half Guard)",
    description:
      "A classic half guard sweep using an underhook to drive the top player over, ending in top half guard or side control.",
    position: "Half Guard",
    category: "Sweeps",
    beltLevel: "BLUE",
    steps: [
      "From bottom half guard, establish a deep underhook on the far side.",
      "Come up to your knees while maintaining the underhook and half guard hook.",
      "Block their far leg with your free hand.",
      "Drive forward and sweep them over the blocked leg.",
      "Establish top position — half guard or side control.",
    ],
    tips: [
      "The underhook is the key — fight hard for it.",
      "Get off your back and onto your side immediately.",
      "If they whizzer, switch to an electric chair or plan B sweep.",
    ],
    relatedTechniqueIds: ["t-037", "t-030"],
  },
  {
    id: "t-037",
    name: "Lockdown to Electric Chair",
    description:
      "An advanced half guard system using the lockdown (double overhook on the leg) to off-balance and sweep with the electric chair submission/sweep.",
    position: "Half Guard",
    category: "Sweeps",
    beltLevel: "PURPLE",
    steps: [
      "From bottom half guard, secure the lockdown by triangling your legs around their trapped leg and curling their foot.",
      "Whip down with the lockdown to flatten the opponent and create space.",
      "Secure a deep underhook and come to your side.",
      "Release the lockdown and scoop their far leg with your free arm.",
      "Sweep them by extending your legs and bridging, finishing in top position or a crotch-ripper submission.",
    ],
    tips: [
      "The lockdown whip is essential to flatten them first.",
      "Keep your underhook deep and tight.",
      "The electric chair can be both a sweep and a submission.",
    ],
    relatedTechniqueIds: ["t-036", "t-030"],
  },
  {
    id: "t-038",
    name: "Knee Shield Half Guard Retention",
    description:
      "A defensive half guard framework using a knee shield to maintain distance, create frames, and prevent the top player from smashing through.",
    position: "Half Guard",
    category: "Escapes",
    beltLevel: "WHITE",
    steps: [
      "From bottom half guard, insert your top knee across the opponent's chest as a shield.",
      "Frame with your hands on their bicep and collar (or neck in no-gi).",
      "Keep your bottom leg hooked around their trapped leg.",
      "Use the knee shield to manage distance — push to create space, release to attack.",
      "From here, attack with sweeps, underhook sequences, or reguard to full guard.",
    ],
    tips: [
      "The knee shield is your primary weapon — never let them flatten it.",
      "Stay on your side, never go flat on your back.",
      "This is a launching pad for offense, not just a survival position.",
    ],
    relatedTechniqueIds: ["t-036", "t-006"],
  },
  // ── Additional Techniques ──
  {
    id: "t-039",
    name: "Guillotine Choke from Guard",
    description:
      "A front headlock choke applied from closed guard, targeting the opponent's neck when they shoot in or keep their head low.",
    position: "Guard",
    category: "Submissions",
    beltLevel: "WHITE",
    steps: [
      "When the opponent dives their head down, wrap your arm around their neck with the blade of your forearm against the throat.",
      "Grip your choking hand with your other hand (gable grip or clasped).",
      "Close your guard high around their back.",
      "Arch your back and squeeze your arms upward into their neck.",
      "Pull your elbows into your body to finish.",
    ],
    tips: [
      "Get the arm deep — your wrist bone should be across the throat.",
      "Close your guard high for better control and leverage.",
      "If they posture up, switch to a high guard or armbar.",
    ],
    relatedTechniqueIds: ["t-001", "t-002"],
  },
  {
    id: "t-040",
    name: "Berimbolo",
    description:
      "An inverted guard technique used to take the back by inverting under the opponent and rotating to back control. A hallmark of modern sport BJJ.",
    position: "Guard",
    category: "Transitions",
    beltLevel: "PURPLE",
    steps: [
      "From de la Riva guard, grip the opponent's belt or pants and their far collar or sleeve.",
      "Invert under the opponent by rolling over your shoulder.",
      "Use your de la Riva hook to elevate and off-balance them.",
      "Spin underneath and come up behind them.",
      "Insert hooks and secure the seatbelt for back control.",
    ],
    tips: [
      "Drill the inversion movement solo many times before attempting live.",
      "The de la Riva hook controls their base — keep it active.",
      "If they backstep, follow and reguard or sweep.",
    ],
    relatedTechniqueIds: ["t-035", "t-024"],
  },
];
