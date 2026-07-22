const CASE_MINUTES = 30;

const nusaSipQuestions = [
  {
    id: "datasets",
    category: "Problem structuring",
    type: "multi",
    prompt: "Which FIVE datasets are most relevant to advising NusaSip whether to acquire BrewPack and, if appropriate, set a maximum bid?",
    instruction: "Select exactly five. You cannot change this response after continuing.",
    options: [
      ["A", "Expected RTD sales volume, selling price, and customer discounts"],
      ["B", "RTD packaging, distribution, and promotional costs per bottle"],
      ["C", "BrewPack capacity, utilization, and current third-party production volume"],
      ["D", "BrewPack's standalone profit and required maintenance capex"],
      ["E", "NusaSip's current external manufacturing cost for comparable RTD bottles"],
      ["F", "NusaSip outlet employees' engagement-survey results"],
      ["G", "Indonesia's five-year GDP forecast"],
      ["H", "A focus group's preferred celebrity endorser"],
    ],
    answer: ["A", "B", "C", "D", "E"],
    points: 12,
    exhibit: null,
  },
  {
    id: "profit",
    category: "Quantitative reasoning",
    type: "number",
    prompt: "What was NusaSip's operating profit in Year 2? Enter your answer in IDR billion, to one decimal place.",
    instruction: "Enter your response as a number to one decimal place.",
    answer: 35.2,
    tolerance: 0.05,
    points: 10,
    exhibit: {
      title: "Exhibit 1 · NusaSip group P&L",
      note: "IDR billion",
      columns: ["Metric", "Year 1", "Year 2"],
      rows: [["Revenue", "200.0", "230.0"], ["Total operating costs", "160.0", "194.8"]],
    },
  },
  {
    id: "synergy",
    category: "Quantitative reasoning",
    type: "number",
    prompt: "If NusaSip shifts all forecast RTD demand from its external manufacturer to BrewPack, what annual manufacturing-cost saving would it generate? Enter IDR billion, to one decimal place.",
    instruction: "Enter your response as a number to one decimal place.",
    answer: 12.6,
    tolerance: 0.05,
    points: 12,
    exhibit: {
      title: "Exhibit 2 · RTD manufacturing economics",
      note: "Annual forecast",
      columns: ["Metric", "Value"],
      rows: [["Forecast NusaSip demand", "14.0m bottles"], ["External manufacturer cost", "IDR 4,800 / bottle"], ["BrewPack manufacturing cost", "IDR 3,900 / bottle"]],
    },
  },
  {
    id: "capacity",
    category: "Data interpretation",
    type: "single",
    prompt: "What does BrewPack's current capacity imply for the proposed launch?",
    instruction: "Third-party production is contractually fixed for the next 12 months. Select the best answer.",
    options: [
      ["A", "BrewPack can meet all NusaSip demand and retain 5m bottles of spare capacity."],
      ["B", "BrewPack can meet all NusaSip demand only by displacing current third-party production."],
      ["C", "BrewPack has 9m bottles of spare capacity, so 5m of NusaSip demand still needs another source."],
      ["D", "BrewPack needs to add 14m bottles of capacity before producing any NusaSip RTD coffee."],
    ],
    answer: "C",
    points: 10,
    exhibit: {
      title: "Exhibit 3 · BrewPack production capacity",
      note: "Annual volume, millions of bottles",
      columns: ["Metric", "Annual volume"],
      rows: [["Maximum capacity", "20m bottles"], ["Current third-party volume", "11m bottles"], ["NusaSip forecast demand", "14m bottles"]],
    },
  },
  {
    id: "valuation",
    category: "Quantitative reasoning",
    type: "number",
    prompt: "NusaSip values BrewPack at 8× annual profit impact. For this assessment, profit impact equals BrewPack's standalone profit plus Year-1 manufacturing savings from its available spare capacity. What is NusaSip's maximum financial bid? Enter IDR billion, to one decimal place.",
    instruction: "Enter your response as a number to one decimal place.",
    answer: 120.8,
    tolerance: 0.05,
    points: 14,
    exhibit: {
      title: "Exhibit 4 · Acquisition valuation inputs",
      note: "Year 1",
      columns: ["Input", "Value"],
      rows: [["BrewPack standalone annual profit", "IDR 7.0bn"], ["Available spare capacity", "9.0m bottles"], ["Saving per bottle versus external production", "IDR 900"], ["Valuation multiple", "8× annual profit impact"]],
    },
  },
  {
    id: "ev",
    category: "Quantitative reasoning",
    type: "number",
    prompt: "The final row is a certain one-off campaign cost. What is the campaign's risk-adjusted net value? Enter IDR billion, to one decimal place.",
    instruction: "Enter a negative response with a minus sign, if applicable.",
    answer: -0.4,
    tolerance: 0.05,
    points: 12,
    exhibit: {
      title: "Exhibit 5 · National campaign scenarios",
      note: "Scenario outcomes",
      columns: ["Scenario", "Probability", "Incremental annual profit / cost"],
      rows: [["High adoption", "50%", "IDR 20bn"], ["Moderate adoption", "30%", "IDR 8bn"], ["Low adoption", "20%", "–IDR 4bn"], ["One-off campaign cost", "Certain", "–IDR 12bn"]],
    },
  },
  {
    id: "risks",
    category: "Business judgment",
    type: "multi",
    prompt: "Which THREE risks should NusaSip prioritize before acquiring BrewPack?",
    instruction: "Select exactly three risks that are material and specific to this decision.",
    options: [
      ["A", "The RTD line could cannibalize higher-margin purchases at NusaSip cafés."],
      ["B", "Food-safety or quality-control failures could damage the NusaSip brand."],
      ["C", "Packaging-input volatility could erode expected unit economics."],
      ["D", "Café loyalty-program redemption rates may dip during the launch month."],
      ["E", "A competitor's logo may use a similar shade of green."],
      ["F", "Long-run currency depreciation could raise imported packaging costs over the next decade."],
    ],
    answer: ["A", "B", "C"],
    points: 10,
    exhibit: null,
  },
  {
    id: "decision",
    category: "Synthesis",
    type: "single",
    prompt: "Which recommendation is best supported by the analysis so far?",
    instruction: "Select the most evidence-led next step.",
    options: [
      ["A", "Acquire BrewPack immediately at any price, because vertical integration always reduces risk."],
      ["B", "Do not acquire BrewPack; the national launch has a negative risk-adjusted value, so test demand and resolve the capacity gap before making a bid."],
      ["C", "Acquire BrewPack for IDR 120.8bn, then launch nationally regardless of campaign economics."],
      ["D", "Ignore RTD coffee and focus only on employee engagement, which is the clearest cause of profit decline."],
    ],
    answer: "B",
    points: 10,
    exhibit: null,
  },
];

const bumiBiteQuestions = [
  { id: "datasets", category: "Problem structuring", type: "multi", prompt: "Which FIVE datasets are most relevant to advising BumiBite whether to acquire NutriPak and, if appropriate, set a maximum bid?", instruction: "Select exactly five. You cannot change this response after continuing.", options: [["A", "Expected protein-chip sales volume, selling price, and customer discounts"], ["B", "Protein-chip ingredients, packaging, distribution, and promotional costs per pack"], ["C", "NutriPak capacity, utilization, and current third-party production volume"], ["D", "NutriPak's standalone profit and required maintenance capex"], ["E", "BumiBite's current external co-packing cost for comparable snack packs"], ["F", "BumiBite employee engagement-survey results"], ["G", "US five-year GDP forecast"], ["H", "A focus group's preferred celebrity endorser"]], answer: ["A", "B", "C", "D", "E"], points: 12, exhibit: null },
  { id: "profit", category: "Quantitative reasoning", type: "number", prompt: "What was BumiBite's operating profit in Year 2? Enter your answer in IDR billion, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 30.4, tolerance: 0.05, points: 10, exhibit: { title: "Exhibit 1 · BumiBite group P&L", note: "IDR billion", columns: ["Metric", "Year 1", "Year 2"], rows: [["Revenue", "160.0", "184.0"], ["Total operating costs", "128.0", "153.6"]] } },
  { id: "synergy", category: "Quantitative reasoning", type: "number", prompt: "If BumiBite shifts all forecast protein-chip demand from its external co-packer to NutriPak, what annual manufacturing-cost saving would it generate? Enter IDR billion, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 7.2, tolerance: 0.05, points: 12, exhibit: { title: "Exhibit 2 · Protein-chip manufacturing economics", note: "Annual forecast", columns: ["Metric", "Value"], rows: [["Forecast BumiBite demand", "12.0m packs"], ["External co-packer cost", "IDR 3,900 / pack"], ["NutriPak manufacturing cost", "IDR 3,300 / pack"]] } },
  { id: "capacity", category: "Data interpretation", type: "single", prompt: "What does NutriPak's current capacity imply for the proposed launch?", instruction: "Third-party production is contractually fixed for the next 12 months. Select the best answer.", options: [["A", "NutriPak can meet all BumiBite demand and retain 2m packs of spare capacity."], ["B", "NutriPak can meet all BumiBite demand only by displacing current third-party production."], ["C", "NutriPak has 10m packs of spare capacity, so 2m of BumiBite demand still needs another source."], ["D", "NutriPak needs to add 12m packs of capacity before producing any protein chips."]], answer: "C", points: 10, exhibit: { title: "Exhibit 3 · NutriPak production capacity", note: "Annual volume", columns: ["Metric", "Annual volume"], rows: [["Maximum capacity", "18m packs"], ["Current third-party volume", "8m packs"], ["BumiBite forecast demand", "12m packs"]] } },
  { id: "valuation", category: "Quantitative reasoning", type: "number", prompt: "BumiBite values NutriPak at 8× annual profit impact. For this assessment, profit impact equals NutriPak's standalone profit plus Year-1 manufacturing savings from its available spare capacity. What is BumiBite's maximum financial bid? Enter IDR billion, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 92.0, tolerance: 0.05, points: 14, exhibit: { title: "Exhibit 4 · Acquisition valuation inputs", note: "Year 1", columns: ["Input", "Value"], rows: [["NutriPak standalone annual profit", "IDR 5.5bn"], ["Available spare capacity", "10.0m packs"], ["Saving per pack versus external co-packing", "IDR 600"], ["Valuation multiple", "8× annual profit impact"]] } },
  { id: "ev", category: "Quantitative reasoning", type: "number", prompt: "The final row is a certain one-off launch cost. What is the launch's risk-adjusted net value? Enter IDR billion, to one decimal place.", instruction: "Enter a negative response with a minus sign, if applicable.", answer: -0.4, tolerance: 0.05, points: 12, exhibit: { title: "Exhibit 5 · National launch scenarios", note: "Scenario outcomes", columns: ["Scenario", "Probability", "Incremental annual profit / cost"], rows: [["High adoption", "40%", "IDR 18bn"], ["Moderate adoption", "40%", "IDR 6bn"], ["Low adoption", "20%", "–IDR 5bn"], ["One-off launch cost", "Certain", "–IDR 9bn"]] } },
  { id: "risks", category: "Business judgment", type: "multi", prompt: "Which THREE risks should BumiBite prioritize before acquiring NutriPak?", instruction: "Select exactly three risks that are material and specific to this decision.", options: [["A", "Protein chips could cannibalize higher-margin BumiBite e-commerce bundles."], ["B", "Food-safety or quality-control failures could damage the BumiBite brand."], ["C", "Protein-powder and packaging-input volatility could erode expected unit economics."], ["D", "Modern-retail shelf-placement fees could rise during the launch period."], ["E", "A competitor's logo may use a similar shade of green."], ["F", "Protein-ingredient import tariffs could increase over the next decade."]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "decision", category: "Synthesis", type: "single", prompt: "Which recommendation is best supported by the analysis so far?", instruction: "Select the most evidence-led next step.", options: [["A", "Acquire NutriPak immediately at any price, because vertical integration always reduces risk."], ["B", "Do not acquire NutriPak yet; test demand and resolve the capacity gap before making a bid."], ["C", "Acquire NutriPak for IDR 92.0bn, then launch nationally regardless of launch economics."], ["D", "Ignore protein chips and focus only on employee engagement, which is the clearest cause of profit decline."]], answer: "B", points: 10, exhibit: null },
];

const suryaGridQuestions = [
  { id: "datasets", category: "Problem structuring", type: "multi", prompt: "Which FIVE datasets are most important to help SuryaGrid set a feasible 2030 climate target and choose initiatives?", instruction: "Select exactly five. The target must balance emissions, reliability, affordability, and execution feasibility.", options: [["A", "Current emissions by generation asset and projected 2030 electricity demand"], ["B", "Initiative-level abatement, investment, implementation timing, and operational effects"], ["C", "Reliability metrics and the expected effect of each initiative on outage performance"], ["D", "Tariff and affordability impact by customer segment"], ["E", "Permitting, land, grid-connection, and regulatory constraints"], ["F", "The CEO's preferred font for the annual report"], ["G", "Global smartphone market-share forecasts"], ["H", "Average employee commute distance to headquarters"]], answer: ["A", "B", "C", "D", "E"], points: 12, exhibit: null },
  { id: "target", category: "Quantitative reasoning", type: "number", prompt: "SuryaGrid emitted 2.40m tCO₂e in 2024 and aims to cut emissions 35% by 2030. How many million tCO₂e must it abate? Enter million tCO₂e to two decimal places.", instruction: "Enter your response as a number.", answer: 0.84, tolerance: 0.005, points: 10, exhibit: { title: "Exhibit 1 · Climate ambition", note: "Fictional client data", columns: ["Metric", "Value"], rows: [["2024 emissions", "2.40m tCO₂e"], ["2030 reduction target", "35%"]] } },
  { id: "portfolio", category: "Data interpretation", type: "single", prompt: "Which portfolio reaches SuryaGrid's 0.84m tCO₂e reduction target while staying within its IDR 170bn budget, causing no reliability decline, and limiting average tariff impact to +0.6%?", instruction: "Select the most feasible portfolio.", options: [["A", "Solar PPAs + battery storage + coal efficiency + demand response"], ["B", "Solar PPAs + coal efficiency + demand response + diesel retirement"], ["C", "Solar PPAs + battery storage + diesel retirement"], ["D", "Battery storage + coal efficiency + demand response + diesel retirement"]], answer: "B", points: 14, exhibit: { title: "Exhibit 2 · Initiative trade-offs", note: "Fictional client data", columns: ["Initiative", "Abatement (m tCO₂e)", "Cost (IDR bn)", "Reliability effect", "Tariff impact"], rows: [["Solar PPAs", "0.30", "45", "0.0", "+0.3%"], ["Battery storage", "0.10", "55", "+1.0", "+0.2%"], ["Coal efficiency", "0.18", "30", "0.0", "0.0%"], ["Demand response", "0.16", "20", "+0.5", "−0.1%"], ["Diesel retirement", "0.20", "50", "−0.5", "+0.4%"]] } },
  { id: "cost", category: "Quantitative reasoning", type: "number", prompt: "What is the average abatement cost of the feasible portfolio? Enter IDR thousand per tCO₂e to one decimal place.", instruction: "Use the portfolio you selected in the preceding question.", answer: 172.6, tolerance: 0.1, points: 12, exhibit: null },
  { id: "kpis", category: "Business judgment", type: "multi", prompt: "Which THREE KPIs best protect the non-financial outcomes of SuryaGrid's climate plan?", instruction: "Select exactly three.", options: [["A", "Annual tCO₂e avoided versus the approved transition pathway"], ["B", "Outage duration and frequency for affected customers"], ["C", "Tariff burden for low-income households"], ["D", "Number of sustainability-themed social-media posts"], ["E", "Headquarters parking-space utilization"], ["F", "The CEO's number of speaking engagements"]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "score", category: "Quantitative reasoning", type: "number", prompt: "SuryaGrid weights emissions 50%, reliability 25%, affordability 15%, and execution readiness 10%. What is Portfolio A's weighted score out of 100? Enter to one decimal place.", instruction: "Use the scores in Exhibit 3.", answer: 88.0, tolerance: 0.05, points: 12, exhibit: { title: "Exhibit 3 · Portfolio scorecard", note: "0 = weakest, 100 = strongest", columns: ["Portfolio", "Emissions", "Reliability", "Affordability", "Execution readiness"], rows: [["A", "100", "100", "40", "70"], ["B", "90", "80", "85", "90"]] } },
  { id: "risks", category: "Business judgment", type: "multi", prompt: "Which THREE risks deserve explicit mitigation before SuryaGrid commits to the transition portfolio?", instruction: "Select exactly three risks that are material to this plan.", options: [["A", "Land, permitting, or grid-connection delays could push back solar delivery."], ["B", "Demand-response participation could be lower than expected."], ["C", "Diesel retirement could impair reliability if replacement capacity is late."], ["D", "The company might receive fewer likes on a transition announcement."], ["E", "Office coffee demand could change during construction."], ["F", "The company logo may look less modern than a competitor's."]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "decision", category: "Synthesis", type: "single", prompt: "What should SuryaGrid recommend to its board?", instruction: "Select the best evidence-led recommendation.", options: [["A", "Adopt Portfolio B and begin immediately, because it hits the target at the lowest cost."], ["B", "Adopt Portfolio B conditionally: approve the target, stage the initiative commitments against reliability and affordability guardrails, and secure permitting and demand-response pilots first."], ["C", "Choose Portfolio A because it has the highest weighted score, despite missing the emissions target."], ["D", "Defer climate action until every uncertainty has been eliminated."]], answer: "B", points: 10, exhibit: null },
];

const healthAccessQuestions = [
  { id:"datasets",category:"Problem structuring",type:"multi",prompt:"Which FIVE datasets are most important to improve health-care access across ArchipelagoCare's network?",instruction:"Select exactly five.",options:[["A","Patient demand and unmet need by district"],["B","Appointment capacity, staffing, and wait time by facility"],["C","Intervention capacity, cost, and time to implement"],["D","Travel time and service use for rural and low-income patients"],["E","Clinical outcomes and quality safeguards"],["F","Hospital lobby color preferences"],["G","National life-expectancy trend over the past 50 years"],["H","Head-office parking use"]],answer:["A","B","C","D","E"],points:12,exhibit:null },
  { id:"target",category:"Quantitative reasoning",type:"number",prompt:"ArchipelagoCare serves 500,000 annual patients. Currently 60% receive a consultation within 30 days; the target is 80%. How many additional patients must receive a timely consultation? Enter thousands of patients.",instruction:"Enter your response as a number.",answer:100,answerUnit:"thousand patients",tolerance:.05,points:10,exhibit:{title:"Exhibit 1 · Access target",note:"Fictional client data",columns:["Metric","Value"],rows:[["Annual patients","500,000"],["Current within 30 days","60%"],["Target within 30 days","80%"]]} },
  { id:"portfolio",category:"Data interpretation",type:"single",prompt:"Which portfolio delivers the 100,000 additional timely consultations within the IDR 55bn budget, without reducing clinical-quality score?",instruction:"Select the most feasible portfolio.",options:[["A","Telehealth triage + mobile clinics + scheduling redesign"],["B","Telehealth triage + mobile clinics"],["C","Mobile clinics + weekend clinics"],["D","Telehealth triage + weekend clinics + scheduling redesign"]],answer:"A",points:14,exhibit:{title:"Exhibit 2 · Access interventions",note:"Fictional client data",columns:["Initiative","Extra timely consultations","Cost (IDR bn)","Quality effect"],rows:[["Telehealth triage","45,000","20","0"],["Mobile clinics","35,000","25","0"],["Scheduling redesign","20,000","8","+"],["Weekend clinics","30,000","18","−"]]} },
  { id:"cost",category:"Quantitative reasoning",type:"number",prompt:"What is the average cost of the feasible portfolio per additional timely consultation? Enter IDR thousand to one decimal place.",instruction:"Use the portfolio from the preceding question.",answer:530,answerUnit:"IDR thousand",tolerance:.1,points:12,exhibit:null },
  { id:"kpis",category:"Business judgment",type:"multi",prompt:"Which THREE KPIs best protect the non-financial objective of equitable access?",instruction:"Select exactly three.",options:[["A","Share of patients served within 30 days"],["B","Median travel time for rural patients"],["C","Clinical-quality and follow-up completion rate"],["D","Number of social-media followers"],["E","Head-office electricity use"],["F","Number of press mentions"]],answer:["A","B","C"],points:10,exhibit:null },
  { id:"score",category:"Quantitative reasoning",type:"number",prompt:"ArchipelagoCare weights access 45%, equity 30%, quality 15%, and cost 10%. What is Portfolio A's weighted score out of 100?",instruction:"Use Exhibit 3.",answer:91,answerUnit:"score / 100",tolerance:.05,points:12,exhibit:{title:"Exhibit 3 · Portfolio A scorecard",note:"0 = weakest, 100 = strongest",columns:["Access","Equity","Quality","Cost"],rows:[["100","90","90","70"]]} },
  { id:"risks",category:"Business judgment",type:"multi",prompt:"Which THREE risks require mitigation before rollout?",instruction:"Select exactly three.",options:[["A","Digital triage could exclude patients with poor connectivity"],["B","Mobile clinics may struggle to retain qualified staff"],["C","Higher volume could weaken follow-up care if referrals are not integrated"],["D","Telehealth subscription costs could pressure ArchipelagoCare's existing IT budget"],["E","Cafeteria menus may change"],["F","Patient appointment no-show rates could remain unchanged after the rollout"]],answer:["A","B","C"],points:10,exhibit:null },
  { id:"decision",category:"Synthesis",type:"single",prompt:"What should ArchipelagoCare recommend to its board?",instruction:"Select the most evidence-led recommendation.",options:[["A","Deploy Portfolio A nationally without conditions"],["B","Approve Portfolio A, but phase it through rural pilots with quality, equity, and staffing guardrails"],["C","Choose weekend clinics because they are the most visible intervention"],["D","Delay access improvements until all digital-exclusion risk disappears"]],answer:"B",points:10,exhibit:null },
];

const circularPackQuestions = [
  { id:"datasets",category:"Problem structuring",type:"multi",prompt:"Which FIVE datasets are most important to help PacificPack meet its packaging-reduction target?",instruction:"Select exactly five.",options:[["A","Current material use by pack format and product volume"],["B","Initiative-level plastic reduction, cost, and implementation timing"],["C","Food-safety, shelf-life, and product-quality constraints"],["D","Consumer return behavior and recycling collection coverage"],["E","Retailer operating and reverse-logistics constraints"],["F","PacificPack's marketing spend on unrelated snack-category campaigns"],["G","Five-year global oil-price forecast"],["H","Office plant-watering costs"]],answer:["A","B","C","D","E"],points:12,exhibit:null },
  { id:"target",category:"Quantitative reasoning",type:"number",prompt:"PacificPack sells 60m packs annually, each using 30g of virgin plastic. It targets a 25% reduction in virgin plastic. How many tonnes must it reduce?",instruction:"Enter your response as a number.",answer:450,answerUnit:"tonnes",tolerance:.05,points:10,exhibit:{title:"Exhibit 1 · Packaging baseline",note:"Fictional client data",columns:["Metric","Value"],rows:[["Annual packs","60m"],["Virgin plastic per pack","30g"],["Reduction target","25%"]]} },
  { id:"portfolio",category:"Data interpretation",type:"single",prompt:"Which portfolio reaches the 450-tonne target within the IDR 80bn budget, maintains shelf life, and has collection coverage above 60%?",instruction:"Select the most feasible portfolio.",options:[["A","Lightweighting + recycled-content resin + returnable pilot"],["B","Lightweighting + compostable film"],["C","Recycled-content resin + returnable pilot"],["D","Compostable film + returnable pilot"]],answer:"A",points:14,exhibit:{title:"Exhibit 2 · Circularity options",note:"Fictional client data",columns:["Initiative","Reduction (tonnes)","Cost (IDR bn)","Shelf-life","Collection coverage"],rows:[["Lightweighting","180","20","Maintained","n/a"],["Recycled-content resin","200","35","Maintained","n/a"],["Returnable pilot","90","20","Maintained","65%"],["Compostable film","250","45","Reduced","30%"]]} },
  { id:"cost",category:"Quantitative reasoning",type:"number",prompt:"What is the average cost of the feasible portfolio per tonne of virgin plastic reduced? Enter IDR million to one decimal place.",instruction:"Use the portfolio from the preceding question.",answer:166.7,answerUnit:"IDR million / tonne",tolerance:.1,points:12,exhibit:null },
  { id:"kpis",category:"Business judgment",type:"multi",prompt:"Which THREE KPIs best protect circularity outcomes beyond the financial case?",instruction:"Select exactly three.",options:[["A","Virgin-plastic reduction verified by material data"],["B","Return and collection rate by geography"],["C","Food-safety and shelf-life compliance"],["D","Brand hashtag usage"],["E","Office printing volume"],["F","CEO media interviews"]],answer:["A","B","C"],points:10,exhibit:null },
  { id:"score",category:"Quantitative reasoning",type:"number",prompt:"PacificPack weights material reduction 40%, consumer adoption 25%, product quality 20%, and execution readiness 15%. What is Portfolio A's weighted score out of 100?",instruction:"Use Exhibit 3.",answer:88.8,answerUnit:"score / 100",tolerance:.05,points:12,exhibit:{title:"Exhibit 3 · Portfolio A scorecard",note:"0 = weakest, 100 = strongest",columns:["Reduction","Adoption","Quality","Readiness"],rows:[["100","70","100","75"]]} },
  { id:"risks",category:"Business judgment",type:"multi",prompt:"Which THREE risks require mitigation before rollout?",instruction:"Select exactly three.",options:[["A","Recycled resin supply could be inconsistent in quality or availability"],["B","Retailers may not execute reverse logistics consistently"],["C","Consumers may not return packs despite the incentive"],["D","Recycled-resin pricing could rise if global demand for recycled feedstock increases"],["E","Retail price promotions could temporarily mask the packaging change's effect on sales"],["F","Competitors may use a different font"]],answer:["A","B","C"],points:10,exhibit:null },
  { id:"decision",category:"Synthesis",type:"single",prompt:"What should PacificPack recommend to its executive team?",instruction:"Select the most evidence-led recommendation.",options:[["A","Adopt Portfolio A and launch every component nationally on day one"],["B","Adopt Portfolio A conditionally: scale lightweighting and recycled resin, while gating the returnable pilot on retailer and consumer-return proof points"],["C","Choose compostable film because it sounds more sustainable"],["D","Pause the target until a zero-risk material exists"]],answer:"B",points:10,exhibit:null },
];

const anggunLivingQuestions = [
  { id: "datasets", category: "Problem structuring", type: "multi", prompt: "Which FIVE datasets are most relevant to diagnosing Anggun Living's profit decline and choosing a margin-recovery lever?", instruction: "Select exactly five. You cannot change this response after continuing.", options: [["A", "Segment-level revenue, volume, and price mix by year"], ["B", "Segment-level margin and cost structure"], ["C", "Competitor pricing and promotional intensity in the décor segment"], ["D", "Implementation cost, timeline, and volume-loss risk for each candidate lever"], ["E", "Customer price sensitivity by segment"], ["F", "Store-employee engagement-survey results"], ["G", "National five-year interest-rate forecast"], ["H", "The CEO's preferred font for investor presentations"]], answer: ["A", "B", "C", "D", "E"], points: 12, exhibit: null },
  { id: "profit", category: "Quantitative reasoning", type: "number", prompt: "What was Anggun Living's operating profit in Year 2? Enter your answer in IDR billion, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 34.5, tolerance: 0.05, points: 10, exhibit: { title: "Exhibit 1 · Anggun Living group P&L", note: "IDR billion", columns: ["Metric", "Year 1", "Year 2"], rows: [["Revenue", "200.0", "230.0"], ["Total operating costs", "161.2", "195.5"]] } },
  { id: "mix", category: "Data interpretation", type: "single", prompt: "What best explains why profit fell even though revenue grew 15%?", instruction: "Use Exhibit 2. Select the best-supported explanation.", options: [["A", "Premium-segment unit costs rose sharply in Year 2."], ["B", "Overall furniture demand contracted in Year 2."], ["C", "Revenue mix shifted toward the higher-volume, lower-margin décor segment, pulling down the blended margin even as revenue grew."], ["D", "Currency depreciation reduced the IDR value of reported revenue."]], answer: "C", points: 14, exhibit: { title: "Exhibit 2 · Segment revenue mix and margin", note: "Fictional client data", columns: ["Segment", "Year 1 revenue share", "Year 2 revenue share", "Segment margin"], rows: [["Premium furniture", "45%", "25%", "28%"], ["Mass furniture", "35%", "35%", "16%"], ["Décor & accessories", "20%", "40%", "6%"]] } },
  { id: "margin", category: "Quantitative reasoning", type: "number", prompt: "What is Anggun Living's blended margin in Year 2, using the segment mix in Exhibit 2? Enter as a percentage to one decimal place.", instruction: "Enter your response as a number, e.g. 15.0 for 15.0%.", answer: 15.0, answerUnit: "% margin", tolerance: 0.05, points: 12, exhibit: null },
  { id: "recovery", category: "Quantitative reasoning", type: "number", prompt: "Using Exhibit 3, what is the net profit recovery — after implementation cost — from the fastest lever to implement? Enter IDR billion, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 3.0, tolerance: 0.05, points: 12, exhibit: { title: "Exhibit 3 · Margin-recovery levers", note: "Year 2 annualized, fictional client data", columns: ["Lever", "Profit recovery (IDR bn)", "Implementation cost (IDR bn)", "Décor volume-loss risk", "Time to implement"], rows: [["Renegotiate décor supplier costs", "2.0", "0.2", "None", "4 months"], ["Re-price décor by 8%", "3.5", "0.5", "Medium", "1 month"], ["Shift marketing spend to premium segment", "1.8", "1.0", "None", "2 months"], ["Discontinue lowest-margin décor SKUs", "4.5", "1.5", "High", "6 months"]] } },
  { id: "lever", category: "Data interpretation", type: "single", prompt: "Anggun Living needs at least IDR 3.0bn of net annual profit recovery within 3 months, without a high décor volume-loss risk. Which lever satisfies all three constraints?", instruction: "Use Exhibit 3. Select the only lever that clears every constraint.", options: [["A", "Renegotiate décor supplier costs"], ["B", "Re-price décor by 8%"], ["C", "Shift marketing spend to the premium segment"], ["D", "Discontinue the lowest-margin décor SKUs"]], answer: "B", points: 10, exhibit: null },
  { id: "risks", category: "Business judgment", type: "multi", prompt: "Which THREE risks should Anggun Living prioritize before re-pricing décor?", instruction: "Select exactly three risks that are material and specific to this decision.", options: [["A", "Décor customers may be more price-sensitive than assumed, risking volume loss beyond the 1-month transition."], ["B", "Competitors could match the décor price increase, eroding any market-share gain."], ["C", "Store staff may need updated pricing and POS training before the 1-month rollout."], ["D", "National retail rent indices could rise over the next five years."], ["E", "A competitor's logo may use a similar shade of green."], ["F", "Long-run currency depreciation could raise imported décor input costs over the next decade."]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "decision", category: "Synthesis", type: "single", prompt: "What should Anggun Living recommend?", instruction: "Select the most evidence-led next step.", options: [["A", "Discontinue all décor SKUs immediately, since they have the lowest margin."], ["B", "Re-price décor by 8%, the only lever that meets the IDR 3.0bn recovery target within 3 months without a high volume-loss risk; monitor décor elasticity and competitor response before adjusting further."], ["C", "Shift all marketing spend to premium and leave décor pricing untouched, since premium has the highest margin."], ["D", "Take no action until the underlying margin compression is fully understood, even though the recovery target is time-bound."]], answer: "B", points: 10, exhibit: null },
];

const voltaRideQuestions = [
  { id: "datasets", category: "Problem structuring", type: "multi", prompt: "Which FIVE datasets are most relevant to deciding whether VoltaRide should enter Surabaya, and at what fleet scale?", instruction: "Select exactly five. You cannot change this response after continuing.", options: [["A", "Addressable population, mode-share, and ride-frequency assumptions for Surabaya"], ["B", "Per-ride revenue, cost, and contribution-margin economics"], ["C", "Fleet capex, utilization, and the city's vehicle-permit cap"], ["D", "Incumbent operator fleet size, ride volume, and customer ratings"], ["E", "Municipal licensing and two-wheeler regulatory constraints"], ["F", "VoltaRide's HQ headcount in its three existing cities"], ["G", "Indonesia's national smartphone-penetration forecast for the next decade"], ["H", "The founder's preferred scooter paint colour"]], answer: ["A", "B", "C", "D", "E"], points: 12, exhibit: null },
  { id: "tam", category: "Quantitative reasoning", type: "number", prompt: "How many e-scooter rides per month does Surabaya's addressable market imply? Enter in thousands of rides, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 384.0, answerUnit: "thousand rides / month", tolerance: 0.5, points: 10, exhibit: { title: "Exhibit 1 · Surabaya market-sizing inputs", note: "Fictional client data", columns: ["Metric", "Value"], rows: [["Addressable urban population (last-mile commuters)", "1.2 million"], ["Share likely to try e-scooter ride-hailing", "8%"], ["Average rides per active user per month", "4"]] } },
  { id: "unit", category: "Quantitative reasoning", type: "number", prompt: "What is VoltaRide's contribution margin per ride? Enter IDR, to the nearest whole number.", instruction: "Enter your response as a number.", answer: 3000, answerUnit: "IDR / ride", tolerance: 25, points: 12, exhibit: { title: "Exhibit 2 · Per-ride unit economics", note: "Fictional client data", columns: ["Metric", "Value"], rows: [["Average fare per ride", "IDR 9,000"], ["Rider incentive (promotional discount)", "IDR 1,000"], ["Scooter operating cost (charging, maintenance, repositioning)", "IDR 3,500"], ["Platform take-rate paid to driver/ops partner", "IDR 1,500"]] } },
  { id: "fleet", category: "Data interpretation", type: "single", prompt: "Surabaya's Year-1 daily ride target is 1,920 rides (15% of the addressable monthly market, per Exhibit 1). Which fleet plan meets that target without exceeding the city's 2,500-scooter permit cap, at the lowest capex?", instruction: "Select the only plan that clears every constraint.", options: [["A", "Plan A: 2,000 scooters at 1.0 ride/scooter/day, IDR 6.0bn capex"], ["B", "Plan B: 1,200 scooters at 1.0 ride/scooter/day, IDR 3.6bn capex"], ["C", "Plan C: 3,000 scooters at 1.0 ride/scooter/day, IDR 9.0bn capex"], ["D", "Plan D: 1,200 scooters at 1.6 rides/scooter/day, IDR 3.6bn capex"]], answer: "D", points: 14, exhibit: { title: "Exhibit 3 · Fleet plan options", note: "Fictional client data", columns: ["Plan", "Scooters deployed", "Rides / scooter / day", "Capex (IDR bn)", "Within 2,500-unit permit cap?"], rows: [["A", "2,000", "1.0", "6.0", "Yes"], ["B", "1,200", "1.0", "3.6", "Yes"], ["C", "3,000", "1.0", "9.0", "No — exceeds cap"], ["D", "1,200", "1.6", "3.6", "Yes"]] } },
  { id: "payback", category: "Quantitative reasoning", type: "number", prompt: "Using Plan D's capex and monthly contribution — rides × per-ride contribution margin, less city operations overhead — what is the payback period in months? Enter to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 25.0, tolerance: 0.2, points: 12, exhibit: { title: "Exhibit 4 · Plan D economics (monthly, Year 1)", note: "Fictional client data", columns: ["Metric", "Value"], rows: [["Rides per month", "57,600"], ["Contribution margin per ride", "IDR 3,000"], ["City operations overhead", "IDR 28.8m / month"], ["Plan D capex", "IDR 3,600m"]] } },
  { id: "competition", category: "Data interpretation", type: "single", prompt: "What does the competitive landscape in Exhibit 5 imply for VoltaRide's Year-1 ride target?", instruction: "Select the best-supported implication.", options: [["A", "Existing operators already serve more monthly rides than VoltaRide's full addressable-market estimate, so VoltaRide's 57,600-ride target implies either a larger true market than first sized or taking share directly from incumbents."], ["B", "VoltaRide should set its target lower than Operator Y's volume, since Operator Y has the weaker customer rating."], ["C", "Because Operator X has the largest fleet, VoltaRide cannot enter Surabaya at any fleet size."], ["D", "Surabaya's ride-hailing demand has likely peaked, since two operators already serve the market."]], answer: "A", points: 10, exhibit: { title: "Exhibit 5 · Surabaya micro-mobility competitive landscape", note: "Fictional client data", columns: ["Operator", "Active fleet", "Estimated monthly rides", "Customer rating"], rows: [["Operator X", "4,000", "320,000", "4.6"], ["Operator Y", "1,500", "90,000", "4.1"], ["VoltaRide (planned, Plan D)", "1,200", "57,600", "—"]] } },
  { id: "risks", category: "Business judgment", type: "multi", prompt: "Which THREE risks should VoltaRide prioritize before entering Surabaya?", instruction: "Select exactly three risks that are material and specific to this decision.", options: [["A", "Surabaya's two-wheeler licensing or municipal permit rules could cap or delay fleet deployment."], ["B", "Utilization could fall short of the 1.6 rides-per-scooter assumption used to size Plan D, lengthening payback."], ["C", "Incumbent operators could respond with fare cuts or charging-partner exclusivity, raising VoltaRide's effective acquisition cost."], ["D", "National smartphone ownership could decline over the next decade."], ["E", "A competitor's app icon may use a similar shade of green."], ["F", "Long-run battery-cell commodity prices could fall over the next decade, reducing future capex."]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "decision", category: "Synthesis", type: "single", prompt: "What should VoltaRide recommend?", instruction: "Select the most evidence-led next step.", options: [["A", "Enter Surabaya immediately with the largest fleet, Plan C, since more scooters means more revenue regardless of permits."], ["B", "Enter Surabaya with Plan D, the lowest-capex plan that meets the Year-1 ride target within the permit cap; validate the 1.6 rides-per-scooter utilization assumption with a pilot before scaling further."], ["C", "Do not enter Surabaya, because two incumbent operators already serve the market."], ["D", "Delay entry until VoltaRide can guarantee a Year-1 customer rating above 4.6."]], answer: "B", points: 10, exhibit: null },
];

const javaMartQuestions = [
  { id: "datasets", category: "Problem structuring", type: "multi", prompt: "Which FIVE datasets are most relevant to deciding how Java Mart should respond to HematMart's price cut?", instruction: "Select exactly five. You cannot change this response after continuing.", options: [["A", "Category price, volume, and cost per unit, before and after any response"], ["B", "Estimated volume response to each candidate response (hold, match, differentiate)"], ["C", "HematMart's pricing, promotion, and store-footprint overlap with Java Mart"], ["D", "Implementation cost and speed of each candidate response"], ["E", "Customer price sensitivity in the affected category"], ["F", "Java Mart's store-employee engagement-survey results"], ["G", "National retail electricity-tariff forecast for the next decade"], ["H", "The CEO's preferred shelf-talker font"]], answer: ["A", "B", "C", "D", "E"], points: 12, exhibit: null },
  { id: "gp", category: "Quantitative reasoning", type: "number", prompt: "What is Java Mart's current monthly gross profit in this category? Enter IDR billion, to one decimal place.", instruction: "Enter your response as a number to one decimal place.", answer: 5.0, tolerance: 0.05, points: 10, exhibit: { title: "Exhibit 1 · Category economics today", note: "Fictional client data", columns: ["Metric", "Value"], rows: [["Category monthly revenue", "IDR 18.0bn"], ["Category monthly volume", "4.0m units"], ["Current price per unit", "IDR 4,500"], ["Category cost per unit", "IDR 3,250"]] } },
  { id: "matchimpact", category: "Quantitative reasoning", type: "number", prompt: "Java Mart's category cost per unit is unchanged at IDR 3,250 (Exhibit 1). If Java Mart matches HematMart's 10% price cut and volume stays exactly at 4.0m units, by how much would monthly gross profit fall? Enter IDR billion, to one decimal place.", instruction: "Enter a positive number representing the decline.", answer: 1.8, tolerance: 0.05, points: 12, exhibit: null },
  { id: "scenarios", category: "Data interpretation", type: "single", prompt: "Which response delivers the highest monthly gross profit at the Month-6 run rate?", instruction: "Use Exhibit 2. Select the best-supported response.", options: [["A", "Hold price and accept the volume loss"], ["B", "Match HematMart's 10% price cut"], ["C", "Differentiate with a smaller price cut and a loyalty bundle"], ["D", "Exit the category and reallocate shelf space"]], answer: "C", points: 14, exhibit: { title: "Exhibit 2 · Competitive response scenarios", note: "Month-6 run rate, fictional client data", columns: ["Response", "Price / unit", "Volume", "Gross margin / unit", "Monthly gross profit (IDR bn)"], rows: [["Hold", "IDR 4,500", "3.52m units", "IDR 1,250", "4.4"], ["Match HematMart's 10% cut", "IDR 4,050", "4.375m units", "IDR 800", "3.5"], ["Differentiate (4% cut + loyalty bundle)", "IDR 4,320", "4.30m units", "IDR 1,070", "4.6"]] } },
  { id: "gap", category: "Quantitative reasoning", type: "number", prompt: "What is the gross-profit gap between Differentiate and Match, the two responses that change price? Enter IDR billion, to one decimal place.", instruction: "Use Exhibit 2.", answer: 1.1, tolerance: 0.05, points: 12, exhibit: null },
  { id: "breakeven", category: "Quantitative reasoning", type: "number", prompt: "At the matched price (IDR 4,050, margin IDR 800 per unit), what volume would Java Mart need merely to equal Hold's IDR 4.4bn gross profit? Enter in millions of units, to two decimal places.", instruction: "Enter your response as a number to two decimal places.", answer: 5.50, answerUnit: "million units", tolerance: 0.02, points: 10, exhibit: null },
  { id: "risks", category: "Business judgment", type: "multi", prompt: "Which THREE risks should Java Mart prioritize before adopting the Differentiate response?", instruction: "Select exactly three risks that are material and specific to this decision.", options: [["A", "The loyalty/bundle program may not lift volume by the assumed amount if customers don't value the bundled offer."], ["B", "A 4% price cut may still not fully stop share loss to HematMart in the most price-sensitive segments."], ["C", "Suppliers may resist funding the loyalty program if it compresses their own trade terms."], ["D", "National retail electricity tariffs could rise over the next decade."], ["E", "A competitor's logo may use a similar shade of green."], ["F", "Long-run e-commerce penetration could reduce minimarket foot traffic over the next decade."]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "decision", category: "Synthesis", type: "single", prompt: "What should Java Mart recommend?", instruction: "Select the most evidence-led next step.", options: [["A", "Match HematMart's 10% price cut immediately, since matching the competitor is the safest way to defend share."], ["B", "Differentiate with a 4% price cut and a loyalty bundle — it delivers the highest gross profit of the three responses, and matching in full would actually cost more profit than simply holding price."], ["C", "Hold price and take no other action, since differentiation requires supplier negotiation."], ["D", "Exit the category, since HematMart has already won on price."]], answer: "B", points: 10, exhibit: null },
];

const nadiarMobileQuestions = [
  { id: "datasets", category: "Problem structuring", type: "multi", prompt: "Which FIVE datasets are most relevant to setting Nadiar Mobile's new data-plan price and assessing its competitive position?", instruction: "Select exactly five. You cannot change this response after continuing.", options: [["A", "Price-quantity demand schedule and per-subscriber variable cost for the new tier"], ["B", "Nadiar's and competitors' market share over time"], ["C", "Network cost inputs required to support the new tier, by cost category and period"], ["D", "Customer churn sensitivity to price changes"], ["E", "Competitor pricing for comparable data-plan tiers"], ["F", "Nadiar's HQ office headcount"], ["G", "National five-year GDP growth forecast"], ["H", "The CEO's preferred plan-name font"]], answer: ["A", "B", "C", "D", "E"], points: 12, exhibit: null },
  { id: "revmax", category: "Quantitative reasoning", type: "number", prompt: "What is the maximum monthly revenue achievable from this pricing table? Enter IDR million.", instruction: "Enter your response as a number.", answer: 1250, tolerance: 5, points: 10, exhibit: { title: "Exhibit 1 · Nadiar Mobile demand schedule (new data-plan tier)", note: "Fictional client data", columns: ["Price (IDR thousand/month)", "Subscribers (thousand)", "Monthly revenue (IDR million)", "Monthly profit (IDR million)"], rows: [["20", "60", "1,200", "600"], ["25", "50", "1,250", "750"], ["30", "40", "1,200", "800"], ["35", "30", "1,050", "750"], ["40", "20", "800", "600"]] } },
  { id: "pricepoint", category: "Data interpretation", type: "single", prompt: "Which statement about Nadiar's pricing options is correct?", instruction: "Use Exhibit 1. Select the best-supported statement.", options: [["A", "The IDR 25,000 price maximizes both revenue and profit."], ["B", "The IDR 30,000 price maximizes profit, even though the IDR 25,000 price generates more revenue."], ["C", "The IDR 40,000 price is best because it has the highest price per subscriber."], ["D", "Profit and revenue are always maximized at the same price."]], answer: "B", points: 14, exhibit: null },
  { id: "share", category: "Quantitative reasoning", type: "number", prompt: "By how many percentage points did Nadiar's market share change from Year 1 to Year 2? Enter to one decimal place.", instruction: "Enter your response as a number.", answer: 5.0, answerUnit: "percentage points", tolerance: 0.1, points: 10, exhibit: { title: "Exhibit 2 · Mobile data market share", note: "Fictional client data", columns: ["Operator", "Share (Year 1)", "Share (Year 2)"], rows: [["Nadiar Mobile", "20%", "25%"], ["Competitor Z", "10%", "14%"], ["Others", "70%", "61%"]] } },
  { id: "shareinsight", category: "Data interpretation", type: "single", prompt: "Which statement about the share changes in Exhibit 2 is correct?", instruction: "Select the best-supported statement.", options: [["A", "Nadiar gained more percentage points of share than Competitor Z (5pp vs 4pp), even though Competitor Z grew faster in relative terms (40% vs 25%)."], ["B", "Competitor Z gained more share than Nadiar in every sense, since its percentage growth rate is higher."], ["C", "Nadiar and Competitor Z gained the same amount of share, since both increased their share."], ["D", "Others' share grew because Nadiar and Competitor Z both gained share."]], answer: "A", points: 12, exhibit: null },
  { id: "cost", category: "Quantitative reasoning", type: "number", prompt: "What is Nadiar's total annual incremental cost to support the new tier? Enter IDR million, to the nearest whole number.", instruction: "Enter your response as a number.", answer: 2160, tolerance: 10, points: 12, exhibit: { title: "Exhibit 3 · Network cost inputs for the new tier", note: "Fictional client data — note the differing periods", columns: ["Cost item", "Value"], rows: [["Incremental spectrum leasing fee", "IDR 180m per quarter"], ["Additional tower maintenance", "IDR 960m per year"], ["Customer support staffing", "IDR 40m per month"]] } },
  { id: "risks", category: "Business judgment", type: "multi", prompt: "Which THREE risks should Nadiar prioritize before launching the new tier at IDR 30,000?", instruction: "Select exactly three risks that are material and specific to this decision.", options: [["A", "Subscribers may churn if the IDR 30,000 price is perceived as a premium versus competitors' entry tiers."], ["B", "Network costs could rise further if usage per subscriber exceeds the assumptions behind the cost exhibit."], ["C", "Competitor Z's faster relative share growth could erode Nadiar's lead if the trend continues."], ["D", "National smartphone import tariffs could change over the next decade."], ["E", "A competitor's logo may use a similar shade of green."], ["F", "Long-run satellite-internet adoption could reduce demand for terrestrial mobile data over the next decade."]], answer: ["A", "B", "C"], points: 10, exhibit: null },
  { id: "decision", category: "Synthesis", type: "single", prompt: "What should Nadiar recommend?", instruction: "Select the most evidence-led next step.", options: [["A", "Price at IDR 25,000 because it maximizes revenue, which is the best proxy for long-term growth."], ["B", "Price at IDR 30,000 because it maximizes monthly profit, and monitor Competitor Z's faster relative share growth even though Nadiar leads on percentage points."], ["C", "Price at IDR 40,000 to position the tier as premium, regardless of the profit table."], ["D", "Delay pricing until Nadiar's percentage-point lead in market share disappears."]], answer: "B", points: 10, exhibit: null },
];

const caseLibrary = [
  { id: "nusasip", title: "NusaSip × BrewPack", context: "NusaSip is a 120-outlet Indonesian specialty-coffee chain. Operating profit fell 12% last year despite sales rising 15%. The CEO is evaluating an acquisition of BrewPack to launch RTD coffee through minimarkets.", situation: "NusaSip, an Indonesian specialty-coffee chain, is considering acquiring a local bottler to launch ready-to-drink coffee in minimarkets.", objective: "Should NusaSip acquire BrewPack—and if so, what is the maximum bid?", videoPrompt: "Advise NusaSip's CEO whether to acquire BrewPack and what to do next.", coachTitle: "You made the right call: test before buying.", coachText: "The best supported recommendation is to avoid an immediate acquisition: the IDR 120.8bn value is a ceiling, not a reason to pay it, and the national campaign has a –IDR 0.4bn risk-adjusted value. Pilot demand, close the 5m-bottle capacity gap, then revisit a negotiated bid.", coachClose: "I recommend a pilot rather than acquiring BrewPack now. The deal has a financial ceiling of IDR 120.8bn, but BrewPack cannot fulfill 5m bottles in Year 1 and a national launch is slightly value-negative after marketing spend. Pilot in priority cities, validate demand and cannibalization, and negotiate only once capacity and economics are proven.", questions: nusaSipQuestions },
  { id: "bumibite", title: "BumiBite × NutriPak", difficulty: "Hard", context: "BumiBite is an Indonesian healthy-snack brand. Operating profit fell despite revenue growth, and the CEO is evaluating an acquisition of NutriPak to launch protein chips nationally.", situation: "BumiBite, an Indonesian healthy-snack brand, is considering acquiring a local co-packer to launch protein chips through modern retail.", objective: "Should BumiBite acquire NutriPak—and if so, what is the maximum bid?", videoPrompt: "Advise BumiBite's CEO whether to acquire NutriPak and what to do next.", coachTitle: "You made the right call: validate the economics first.", coachText: "The IDR 92.0bn valuation is a ceiling, not an acquisition recommendation. NutriPak cannot cover 2m packs of Year-1 demand and the national launch is slightly value-negative after the launch investment. Pilot demand, verify cannibalization, and secure a capacity solution before bidding.", coachClose: "I recommend a pilot rather than acquiring NutriPak now. The financial ceiling is IDR 92.0bn, but there is a 2m-pack capacity gap and the launch is slightly value-negative on a risk-adjusted basis. Pilot in priority retailers, validate demand and margin, then revisit a negotiated acquisition once the capacity plan is clear.", questions: bumiBiteQuestions },
  { id: "suryagrid", title: "SuryaGrid 2030 Transition", difficulty: "Very hard · Sustainability", context: "SuryaGrid is a fictional Indonesian utility. Its board wants a 2030 climate target that reduces environmental impact without compromising system reliability or household affordability.", situation: "SuryaGrid must build a climate business case, choose initiatives, and set guardrails for a transition portfolio.", objective: "Recommend a feasible target and transition portfolio that balances emissions, reliability, affordability, and execution risk.", videoPrompt: "Advise SuryaGrid's board on the 2030 target and which transition portfolio to pursue.", coachTitle: "Strong sustainability cases treat trade-offs as constraints, not footnotes.", coachText: "Portfolio B is the feasible starting point: it reaches the emissions goal within budget, holds reliability flat, and stays within the affordability guardrail. The recommendation must remain conditional on permitting, replacement capacity, and demand-response proof points.", coachClose: "I recommend approving the 35% target and pursuing Portfolio B conditionally. It delivers the required 0.84m tCO₂e reduction inside the budget while holding reliability and tariffs within the board's guardrails. The main risk is execution: secure solar permits, pilot demand response, and gate diesel retirement on replacement-capacity readiness.", questions: suryaGridQuestions },
  { id:"healthaccess",title:"ArchipelagoCare Access",difficulty:"Very hard · Public sector",context:"ArchipelagoCare is a fictional Indonesian health network. It must improve timely consultations while protecting equity, clinical quality, and scarce staff capacity.",situation:"A health network needs an access strategy that does not leave rural or low-connectivity patients behind.",objective:"Recommend an access portfolio that improves timely care, equity, quality, and execution readiness.",videoPrompt:"Advise ArchipelagoCare's board on the access portfolio and the conditions required for rollout.",coachTitle:"The best access strategy improves outcomes without hiding who gets left behind.",coachText:"Portfolio A meets the timely-access target within budget without reducing quality. It should be phased through rural pilots with safeguards for connectivity, staffing, referral follow-up, and clinical quality.",coachClose:"I recommend approving Portfolio A through phased rural pilots. It provides 100,000 additional timely consultations inside the budget while preserving quality. The central risk is unequal access through digital triage, so we should track rural travel time, staff mobile clinics adequately, and gate scale-up on follow-up completion.",questions:healthAccessQuestions },
  { id:"circularpack",title:"PacificPack Circularity",difficulty:"Very hard · Circular economy",context:"PacificPack is a fictional consumer-goods company that must reduce virgin plastic without compromising food safety, customer adoption, or retailer execution.",situation:"A packaging transition must turn an environmental target into a viable consumer, retailer, and operations plan.",objective:"Recommend a packaging portfolio that delivers material reduction while protecting quality, adoption, and delivery feasibility.",videoPrompt:"Advise PacificPack's executive team on the packaging-transition portfolio and rollout sequence.",coachTitle:"Circularity only works when the material loop works in the real world.",coachText:"Portfolio A reaches the reduction target while keeping shelf life intact and meeting the collection-coverage guardrail. Lightweighting and recycled resin can scale first; the returnable model needs retailer and consumer-return proof before a broader rollout.",coachClose:"I recommend Portfolio A, with a staged rollout. It cuts 450 tonnes of virgin plastic inside the budget without compromising shelf life. Scale lightweighting and recycled resin now, and gate the returnable pilot on verified retailer reverse logistics, consumer return rates, and recycled-resin quality.",questions:circularPackQuestions },
  { id: "anggunliving", title: "Anggun Living Margin Diagnosis", difficulty: "Hard · Pricing & profitability", context: "Anggun Living is a fictional Indonesian home-furnishing retail chain. Revenue rose 15% last year, but profit fell — the CEO wants to know why and which lever can recover margin fastest.", situation: "Anggun Living's profit fell despite revenue growth, and the CEO needs a fast, targeted margin-recovery plan.", objective: "Diagnose the true driver of the profit decline and recommend the fastest lever that meets the recovery target without high volume-loss risk.", videoPrompt: "Advise Anggun Living's CEO on what's driving the profit decline and which lever to pursue.", coachTitle: "You read the mix shift, not just the headline numbers.", coachText: "Revenue growth masked a real problem: the segment mix shifted toward décor, Anggun Living's lowest-margin line, pulling the blended margin from roughly 19% to 15.0%. Re-pricing décor by 8% is the only lever that clears the IDR 3.0bn recovery bar inside three months without a high volume-loss risk.", coachClose: "I recommend re-pricing décor by 8%. Revenue grew 15% last year, but the mix shifted toward our lowest-margin segment, so profit fell. This lever recovers IDR 3.0bn net of cost within three months without a high volume-loss risk — the only option that clears all three constraints. We should monitor décor elasticity and competitor response, and have supplier renegotiation ready as a fallback.", questions: anggunLivingQuestions },
  { id: "voltaride", title: "VoltaRide Surabaya Entry", difficulty: "Hard · Market entry", context: "VoltaRide operates e-scooter ride-hailing in three Indonesian cities. The CEO is weighing whether to enter a fourth city, Surabaya, and at what fleet scale.", situation: "VoltaRide must size Surabaya's addressable market, choose a fleet plan within the city's permit cap, and assess whether the unit economics pay back fast enough to justify entry.", objective: "Recommend whether to enter Surabaya, at what fleet scale, and under what conditions.", videoPrompt: "Advise VoltaRide's CEO on whether to enter Surabaya and at what fleet scale.", coachTitle: "You sized capacity against a real constraint, not just demand.", coachText: "Plan D meets the Year-1 ride target at the lowest capex by assuming higher utilization rather than more scooters — and it's the only plan that fits inside the 2,500-vehicle permit cap. Payback lands at 25 months, inside the CEO's 30-month bar, but the recommendation should stay conditional on validating that utilization assumption.", coachClose: "I recommend entering Surabaya with Plan D: 1,200 scooters at 1.6 rides per scooter per day. It meets the Year-1 ride target within the city's 2,500-vehicle permit cap at the lowest capex, paying back in 25 months — inside the CEO's 30-month bar. The key risk is whether utilization actually reaches 1.6 rides per scooter; we should pilot before committing to a larger fleet.", questions: voltaRideQuestions },
  { id: "javamart", title: "Java Mart Price War", difficulty: "Hard · Competitive response", context: "Java Mart is a fictional Indonesian minimarket chain. A new low-cost competitor, HematMart, just cut packaged-grocery prices 10% in Java Mart's core trade areas. The CEO must decide how to respond.", situation: "Java Mart faces a direct competitor price cut in its highest-volume category and must choose a response before the competitor locks in share.", objective: "Recommend whether to hold, match, or differentiate against HematMart's price cut, and quantify the gross-profit consequence of each.", videoPrompt: "Advise Java Mart's CEO on how to respond to HematMart's price cut.", coachTitle: "You found the move that feels riskier but pays better.", coachText: "Matching HematMart's price cut feels like the safe, defensive choice, but the math says otherwise: at the matched price, Java Mart would need volume to jump 37.5% just to equal what holding price alone delivers. Differentiating with a smaller price cut and a loyalty bundle clears the highest gross profit of the three responses.", coachClose: "I recommend differentiating: a 4% price cut paired with a loyalty bundle, not a full match of HematMart's 10% cut. Differentiate delivers IDR 4.6bn of monthly gross profit, ahead of Hold's IDR 4.4bn and well ahead of Match's IDR 3.5bn — matching would actually need a 37.5% volume jump just to equal what holding price alone delivers. The key risk is whether the loyalty bundle lands with price-sensitive customers, so we should pilot it in the most exposed stores first.", questions: javaMartQuestions },
  { id: "nadiarmobile", title: "Nadiar Mobile Pricing & Share", difficulty: "Hard · Pricing & market-share interpretation", context: "Nadiar Mobile is a fictional Indonesian mobile operator launching a new data-plan tier. The CEO needs a price recommendation and a clear read on how Nadiar's market share is really trending against Competitor Z.", situation: "Nadiar must choose a price for its new tier and correctly interpret a market-share shift that looks different depending on which metric you read.", objective: "Recommend a price that maximizes profit, not just revenue, and give an accurate read on the share trend.", videoPrompt: "Advise Nadiar's CEO on the new tier's price and what's really happening to market share.", coachTitle: "You didn't confuse revenue-max with profit-max, or points with percent.", coachText: "The IDR 25,000 price maximizes revenue, but the IDR 30,000 price maximizes profit — a classic case-interview trap. The share data has a similar trap: Nadiar leads on percentage-point gains, but Competitor Z is growing faster in relative terms.", coachClose: "I recommend pricing the new tier at IDR 30,000, not the revenue-maximizing IDR 25,000 — it produces IDR 800m of monthly profit versus IDR 750m at the lower price. On share, Nadiar leads by percentage points but Competitor Z is growing faster proportionally, so we should watch the relative trend, not just the headline points gained. Total incremental annual cost is IDR 2,160m, which the profit at the new price comfortably covers.", questions: nadiarMobileQuestions },
];

const openingClientTurns = {
  nusasip: {
    type: "client",
    prompt: "Before we analyze the acquisition, which TWO questions would you ask the CEO first?",
    instruction: "Choose two questions that most directly frame the decision. CaseForge will answer only what you ask.",
    options: [["A", "What outcome would make this acquisition successful, and over what time horizon?"], ["B", "Which RTD customer segments and channels are in scope for the launch?"], ["C", "How many employees work at NusaSip's head office?"], ["D", "What colour should the launch campaign use?"], ["E", "How many café drinks are sold on a typical Friday?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The CEO wants a financially attractive launch that strengthens the brand within three years; an acquisition is optional, not the objective.", B: "The launch targets minimarkets and modern retail, with an initial focus on urban convenience shoppers." },
  },
  bumibite: {
    type: "client",
    prompt: "Before we analyze the acquisition, which TWO questions would you ask the CEO first?",
    instruction: "Choose two questions that most directly frame the decision. CaseForge will answer only what you ask.",
    options: [["A", "What outcome would make this acquisition successful, and over what time horizon?"], ["B", "Which consumer segments and retail channels are in scope for protein chips?"], ["C", "How many staff work in BumiBite's Jakarta office?"], ["D", "Which celebrity does the CEO prefer for advertising?"], ["E", "What is the average commute time of the leadership team?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The CEO wants a profitable national protein-chip platform within three years; buying NutriPak is only worthwhile if it advances that goal.", B: "The intended launch is through modern retail and e-commerce, aimed at active consumers seeking convenient high-protein snacks." },
  },
  suryagrid: {
    type: "client",
    prompt: "Before designing SuryaGrid's transition plan, which TWO questions would you ask the board first?",
    instruction: "Choose two questions that define the decision and its non-negotiable constraints.",
    options: [["A", "What emissions outcome and time horizon does the board expect?"], ["B", "Which reliability and household-affordability guardrails cannot be breached?"], ["C", "What font should the sustainability report use?"], ["D", "How many parking spaces are at headquarters?"], ["E", "Which board member speaks most often at conferences?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The board's ambition is a 35% emissions reduction from 2024 by 2030.", B: "Average tariffs must rise by no more than 0.6%, and reliability must not decline from the current baseline." },
  },
  healthaccess: {
    type: "client",
    prompt: "Before designing an access plan, which TWO questions would you ask ArchipelagoCare's board first?",
    instruction: "Choose two questions that define success and protect the people most affected by the decision.",
    options: [["A", "What access outcome and time horizon define success?"], ["B", "Which patient groups or quality standards must not be disadvantaged?"], ["C", "What colour should mobile clinics be painted?"], ["D", "How often are flowers replaced in the lobby?"], ["E", "Which hospital has the largest staff cafeteria?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The board wants 80% of patients to receive a consultation within 30 days within the next year.", B: "Rural and low-connectivity patients must not be left behind, and clinical-quality scores cannot fall." },
  },
  circularpack: {
    type: "client",
    prompt: "Before proposing a packaging transition, which TWO questions would you ask PacificPack's executive team first?",
    instruction: "Choose two questions that establish the target and the critical product or operating constraints.",
    options: [["A", "What plastic-reduction target and time horizon has the executive team committed to?"], ["B", "Which food-safety, shelf-life, consumer, or retailer constraints are non-negotiable?"], ["C", "Which airline does the CEO prefer to fly?"], ["D", "How many plants are in the head office?"], ["E", "Which cinema genres are most popular this year?"]],
    answer: ["A", "B"],
    clientResponses: { A: "PacificPack has committed to reduce virgin plastic by 25% within the next 18 months.", B: "Food safety and shelf life cannot deteriorate; any returnable solution needs consumer participation and retailer reverse-logistics support." },
  },
  anggunliving: {
    type: "client",
    prompt: "Before diagnosing the profit decline, which TWO questions would you ask the CEO first?",
    instruction: "Choose two questions that define the recovery target and what must not be disrupted.",
    options: [["A", "What profit recovery target and timeline does the CEO expect?"], ["B", "Which segments or stakeholders must not be disrupted by any pricing change?"], ["C", "How many stores does Anggun Living operate nationally?"], ["D", "What colour scheme does the CEO prefer for the next store refresh?"], ["E", "How many loyalty-app downloads occurred last quarter?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The CEO wants at least IDR 3.0bn of annualized profit recovered within three months, without a separate acquisition or store-closure program.", B: "Premium-segment relationships and store-staff jobs should not be disrupted; décor-segment customers are price-sensitive but not strategically protected." },
  },
  voltaride: {
    type: "client",
    prompt: "Before sizing the Surabaya opportunity, which TWO questions would you ask the CEO first?",
    instruction: "Choose two questions that define the success bar and the binding city constraints.",
    options: [["A", "What ride-volume or profitability outcome would make Surabaya entry successful, and over what time horizon?"], ["B", "What permit, licensing, or fleet-cap constraints has the city already signaled?"], ["C", "How many employees work at VoltaRide's Jakarta head office?"], ["D", "What colour should the Surabaya launch livery use?"], ["E", "How many rides did VoltaRide's Jakarta fleet complete last Friday?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The CEO wants Surabaya to reach payback within 30 months and prove the model before considering a fourth city.", B: "Surabaya currently caps two-wheeler ride-hailing fleets at 2,500 permitted vehicles citywide." },
  },
  javamart: {
    type: "client",
    prompt: "Before deciding how to respond, which TWO questions would you ask the CEO first?",
    instruction: "Choose two questions that define success and the most exposed part of the business.",
    options: [["A", "What gross-profit or share outcome would make this response successful, and over what time horizon?"], ["B", "Which stores or customer segments are most exposed to HematMart's price cut?"], ["C", "How many stores does Java Mart operate nationally?"], ["D", "What colour should the next loyalty-card design use?"], ["E", "How many social-media followers does Java Mart have?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The CEO wants to protect category gross profit over the next two quarters without starting an open-ended price war.", B: "The price cut is concentrated in packaged groceries at stores directly overlapping HematMart's new locations." },
  },
  nadiarmobile: {
    type: "client",
    prompt: "Before pricing the new tier, which TWO questions would you ask the CEO first?",
    instruction: "Choose two questions that define the optimization target and the competitive benchmark.",
    options: [["A", "Should we optimize this tier for revenue, profit, or subscriber growth, and over what time horizon?"], ["B", "Which competitors and price tiers should we benchmark against?"], ["C", "How many retail stores does Nadiar operate?"], ["D", "What colour should the new tier's branding use?"], ["E", "How many customer-service calls did Nadiar receive last month?"]],
    answer: ["A", "B"],
    clientResponses: { A: "The CEO wants the new tier optimized for profit, not just revenue or subscriber count, within the first year.", B: "Benchmark against Competitor Z's comparable data-plan tier; smaller operators are not a pricing reference." },
  },
};

const shortResponseOverrides = {
  nusasip: {
    capacity: { type: "short", prompt: "Using the capacity exhibit, explain what it means for NusaSip's proposed launch.", instruction: "In 2–4 lines, state the capacity fact, the implication for demand, and the operational consequence.", responsePrompt: "Capacity fact → demand implication → operational consequence", modelAnswer: "BrewPack has 9m bottles of spare capacity after its fixed third-party commitments, versus NusaSip demand of 14m. It therefore has a 5m-bottle gap in Year 1 and needs another source or added capacity before a full launch.", rubric: [{ label: "Identifies 9m bottles of spare capacity", concepts: ["9m", "9 million", "nine million"] }, { label: "Identifies the 5m-bottle demand gap", concepts: ["5m", "5 million", "five million", "capacity gap"] }, { label: "States that another source or added capacity is needed", concepts: ["another source", "second source", "additional capacity", "add capacity", "cannot meet", "not meet full demand"] }] },
    decision: { type: "short", prompt: "What should NusaSip recommend to its CEO?", instruction: "Answer first, then cite two case facts and one condition or next step.", responsePrompt: "Recommendation → evidence → condition / next step", modelAnswer: "NusaSip should not acquire BrewPack yet. BrewPack has a 5m-bottle Year-1 capacity gap and the national campaign is slightly value-negative after the one-off cost. Pilot demand, secure capacity, and revisit a negotiated bid once the economics are proven.", rubric: [{ label: "Recommends piloting or deferring an immediate acquisition", concepts: ["do not acquire", "not acquire", "defer", "pilot", "wait"] }, { label: "Cites the capacity gap", concepts: ["5m", "5 million", "capacity gap", "capacity"] }, { label: "Cites launch economics and a concrete next step", concepts: ["negative", "value negative", "risk adjusted", "campaign", "secure capacity", "test demand", "pilot"] }] },
  },
  bumibite: {
    capacity: { type: "short", prompt: "Using the capacity exhibit, explain what it means for BumiBite's proposed launch.", instruction: "In 2–4 lines, state the capacity fact, the implication for demand, and the operational consequence.", responsePrompt: "Capacity fact → demand implication → operational consequence", modelAnswer: "NutriPak has 10m packs of spare capacity after its fixed third-party commitments, versus BumiBite demand of 12m. There is a 2m-pack Year-1 gap, so BumiBite needs another co-packer or added capacity before a full launch.", rubric: [{ label: "Identifies 10m packs of spare capacity", concepts: ["10m", "10 million", "ten million"] }, { label: "Identifies the 2m-pack demand gap", concepts: ["2m", "2 million", "two million", "capacity gap"] }, { label: "States that another source or added capacity is needed", concepts: ["another source", "co-packer", "additional capacity", "add capacity", "cannot meet", "not meet full demand"] }] },
    decision: { type: "short", prompt: "What should BumiBite recommend to its CEO?", instruction: "Answer first, then cite two case facts and one condition or next step.", responsePrompt: "Recommendation → evidence → condition / next step", modelAnswer: "BumiBite should not acquire NutriPak yet. There is a 2m-pack capacity gap and the national launch is slightly value-negative after the launch cost. Pilot demand, resolve capacity, and revisit a negotiated bid once the economics are proven.", rubric: [{ label: "Recommends piloting or deferring an immediate acquisition", concepts: ["do not acquire", "not acquire", "defer", "pilot", "wait"] }, { label: "Cites the capacity gap", concepts: ["2m", "2 million", "capacity gap", "capacity"] }, { label: "Cites launch economics and a concrete next step", concepts: ["negative", "value negative", "risk adjusted", "launch", "secure capacity", "test demand", "pilot"] }] },
  },
  suryagrid: {
    portfolio: { type: "short", prompt: "Which transition portfolio should SuryaGrid pursue, and why?", instruction: "In 2–4 lines, name the portfolio and show how it satisfies the emissions, budget, reliability, and tariff constraints.", responsePrompt: "Portfolio → evidence against constraints → implication", portfolioOptions: [["A", "Solar PPAs + battery storage + coal efficiency + demand response"], ["B", "Solar PPAs + coal efficiency + demand response + diesel retirement"], ["C", "Solar PPAs + battery storage + diesel retirement"], ["D", "Battery storage + coal efficiency + demand response + diesel retirement"]], modelAnswer: "SuryaGrid should choose Portfolio B: solar PPAs, coal efficiency, demand response, and diesel retirement. It delivers 0.84m tCO₂e of abatement for IDR 145bn, has no net reliability decline, and limits tariff impact to +0.6%.", rubric: [{ label: "Identifies Portfolio B or its component initiatives", concepts: ["portfolio b", "solar", "coal efficiency", "demand response", "diesel retirement"] }, { label: "Shows it meets the emissions and budget constraints", concepts: ["0.84", "84", "145", "under 170", "budget"] }, { label: "Shows it meets reliability and tariff guardrails", concepts: ["reliability", "no decline", "0.6", "tariff"] }] },
    decision: { type: "short", prompt: "What should SuryaGrid recommend to its board?", instruction: "Answer first, then give evidence and the key conditions required for delivery.", responsePrompt: "Recommendation → evidence → delivery gates", modelAnswer: "Approve the 35% target and pursue Portfolio B conditionally. It meets the emissions, budget, reliability, and affordability guardrails; however, solar permitting, demand-response participation, and replacement capacity must be proven before full commitment.", rubric: [{ label: "Approves Portfolio B conditionally", concepts: ["portfolio b", "conditionally", "approve", "35% target"] }, { label: "Cites the multi-objective guardrails", concepts: ["emissions", "budget", "reliability", "tariff", "affordability"] }, { label: "Names concrete delivery gates", concepts: ["permitting", "demand response", "replacement capacity", "diesel", "pilot"] }] },
  },
  healthaccess: {
    portfolio: { type: "short", prompt: "Which access portfolio should ArchipelagoCare pursue, and why?", instruction: "In 2–4 lines, name the portfolio and show how it meets access, budget, and quality constraints.", responsePrompt: "Portfolio → evidence against constraints → implication", portfolioOptions: [["A", "Telehealth triage + mobile clinics + scheduling redesign"], ["B", "Telehealth triage + mobile clinics"], ["C", "Mobile clinics + weekend clinics"], ["D", "Telehealth triage + weekend clinics + scheduling redesign"]], modelAnswer: "ArchipelagoCare should select Portfolio A: telehealth triage, mobile clinics, and scheduling redesign. It creates 100,000 additional timely consultations at IDR 53bn without reducing clinical quality.", rubric: [{ label: "Identifies Portfolio A or its component interventions", concepts: ["portfolio a", "telehealth", "mobile clinics", "scheduling"] }, { label: "Cites the 100,000 timely-consultation target", concepts: ["100,000", "100k", "100 thousand"] }, { label: "Cites cost and preserves quality", concepts: ["53", "55", "budget", "quality", "no reduction"] }] },
    decision: { type: "short", prompt: "What should ArchipelagoCare recommend to its board?", instruction: "Answer first, then give evidence and the safeguards required for rollout.", responsePrompt: "Recommendation → evidence → equity / quality safeguards", modelAnswer: "Approve Portfolio A through phased rural pilots. It meets the access target within budget while preserving quality, but rollout should be gated on rural connectivity, mobile-clinic staffing, and referral follow-up safeguards.", rubric: [{ label: "Recommends Portfolio A with phased rollout", concepts: ["portfolio a", "phase", "pilot", "approve"] }, { label: "Cites access, budget, or quality evidence", concepts: ["100,000", "100k", "53", "budget", "quality"] }, { label: "Names equity or delivery safeguards", concepts: ["rural", "connectivity", "staffing", "follow-up", "referral"] }] },
  },
  circularpack: {
    portfolio: { type: "short", prompt: "Which packaging portfolio should PacificPack pursue, and why?", instruction: "In 2–4 lines, name the portfolio and show how it satisfies reduction, budget, shelf-life, and collection constraints.", responsePrompt: "Portfolio → evidence against constraints → implication", portfolioOptions: [["A", "Lightweighting + recycled-content resin + returnable pilot"], ["B", "Lightweighting + compostable film"], ["C", "Recycled-content resin + returnable pilot"], ["D", "Compostable film + returnable pilot"]], modelAnswer: "PacificPack should select Portfolio A: lightweighting, recycled-content resin, and a returnable pilot. It reduces 470 tonnes for IDR 75bn, preserves shelf life, and reaches 65% collection coverage.", rubric: [{ label: "Identifies Portfolio A or its component initiatives", concepts: ["portfolio a", "lightweighting", "recycled", "returnable"] }, { label: "Cites reduction and budget evidence", concepts: ["470", "450", "75", "80", "budget"] }, { label: "Cites product-quality and collection constraints", concepts: ["shelf life", "maintained", "65", "collection"] }] },
    decision: { type: "short", prompt: "What should PacificPack recommend to its executive team?", instruction: "Answer first, then give evidence and the rollout conditions required for the returnable model.", responsePrompt: "Recommendation → evidence → rollout gates", modelAnswer: "Adopt Portfolio A in stages. Scale lightweighting and recycled resin now because they meet the reduction goal without harming shelf life, while gating the returnable pilot on retailer reverse logistics and proven consumer return rates.", rubric: [{ label: "Recommends Portfolio A with a staged rollout", concepts: ["portfolio a", "stage", "phased", "scale"] }, { label: "Cites the material-reduction or quality case", concepts: ["reduction", "470", "450", "shelf life", "recycled", "lightweighting"] }, { label: "Gates the returnable model on execution proof", concepts: ["returnable", "retailer", "reverse logistics", "consumer return", "return rate"] }] },
  },
  anggunliving: {
    mix: { type: "short", prompt: "What's driving Anggun Living's profit decline despite rising revenue?", instruction: "In 2–4 lines, state the mix shift, its margin effect, and why revenue growth alone hid the problem.", responsePrompt: "Mix shift → margin effect → why revenue grew anyway", modelAnswer: "Revenue mix shifted from 20% to 40% décor — Anggun Living's lowest-margin segment at 6% — while premium's share fell from 45% to 25%. That pulled the blended margin from roughly 19% to 15.0%, so profit fell even though overall revenue grew 15%, because the extra revenue arrived in the lowest-margin segment.", rubric: [{ label: "Identifies the mix shift toward décor", concepts: ["décor", "decor", "mix shift", "20%", "40%"] }, { label: "Identifies the margin compression toward 15%", concepts: ["15", "19", "margin", "compress", "blended"] }, { label: "Explains revenue grew while profit fell because of mix, not volume", concepts: ["revenue grew", "despite", "lower margin", "lowest margin", "mix"] }] },
    decision: { type: "short", prompt: "What should Anggun Living recommend?", instruction: "Answer first, then cite two case facts and one condition or next step.", responsePrompt: "Recommendation → evidence → condition / next step", modelAnswer: "Re-price décor by 8%. It is the only lever that delivers the required IDR 3.0bn net profit recovery within three months without a high volume-loss risk. Monitor décor price elasticity and competitor response, and revisit supplier renegotiation if décor volume erodes faster than expected.", rubric: [{ label: "Recommends re-pricing décor", concepts: ["re-price", "reprice", "décor", "decor", "8%"] }, { label: "Cites the IDR 3.0bn / 3-month constraint", concepts: ["3.0", "3 month", "three month", "recovery"] }, { label: "Names a monitoring condition or next step", concepts: ["monitor", "elasticity", "competitor", "revisit", "supplier"] }] },
  },
  voltaride: {
    competition: { type: "short", prompt: "What does the competitive landscape imply for VoltaRide's Year-1 ride target?", instruction: "In 2–4 lines, state the comparison, the implication, and what it means for VoltaRide's plan.", responsePrompt: "Comparison → implication → what it means for the plan", modelAnswer: "Incumbents already generate about 410,000 rides a month — more than VoltaRide's 384,000-ride addressable-market estimate. That means either the true market is larger than the simple sizing suggested, or VoltaRide's 57,600-ride target depends on taking share directly from incumbents rather than only serving untapped demand.", rubric: [{ label: "Compares incumbent volume (~410,000) to the TAM estimate (384,000)", concepts: ["410", "384", "incumbent"] }, { label: "Identifies the tension or implication", concepts: ["larger market", "take share", "bigger than", "underestimate"] }, { label: "Connects it to VoltaRide's own ride target", concepts: ["57,600", "target", "plan d", "voltaride"] }] },
    decision: { type: "short", prompt: "What should VoltaRide recommend?", instruction: "Answer first, then cite two case facts and one condition or next step.", responsePrompt: "Recommendation → evidence → condition / next step", modelAnswer: "Enter Surabaya with Plan D. It meets the Year-1 ride target within the 2,500-vehicle permit cap at the lowest capex, paying back in 25 months — inside the CEO's 30-month bar. Validate the 1.6 rides-per-scooter utilization assumption with a pilot before scaling further.", rubric: [{ label: "Recommends entering with Plan D", concepts: ["plan d", "enter", "1,200"] }, { label: "Cites the permit cap and payback evidence", concepts: ["2,500", "permit", "25", "payback", "capex"] }, { label: "Names a validation condition or next step", concepts: ["pilot", "validate", "utilization", "1.6"] }] },
  },
  javamart: {
    scenarios: { type: "short", prompt: "Which response should Java Mart choose, and why?", instruction: "In 2–4 lines, name the response and show how it compares to the other two on gross profit.", responsePrompt: "Response → evidence against the alternatives → implication", portfolioOptions: [["A", "Hold price and accept the volume loss"], ["B", "Match HematMart's 10% price cut"], ["C", "Differentiate with a smaller price cut and a loyalty bundle"], ["D", "Exit the category and reallocate shelf space"]], modelAnswer: "Java Mart should differentiate: a 4% price cut plus a loyalty bundle. It delivers IDR 4.6bn of monthly gross profit, ahead of Hold's IDR 4.4bn and Match's IDR 3.5bn — matching the full price cut actually destroys more profit than it protects.", rubric: [{ label: "Identifies Differentiate or its components", concepts: ["differentiate", "loyalty", "4%", "bundle"] }, { label: "Cites the gross-profit comparison", concepts: ["4.6", "4.4", "3.5", "gross profit"] }, { label: "Explains why Match is worse despite feeling safer", concepts: ["match", "worse", "destroys", "safer", "feels"] }] },
    decision: { type: "short", prompt: "What should Java Mart recommend?", instruction: "Answer first, then cite two case facts and one condition or next step.", responsePrompt: "Recommendation → evidence → condition / next step", modelAnswer: "Differentiate with a 4% price cut and a loyalty bundle. It delivers the highest gross profit of the three responses, IDR 4.6bn versus IDR 4.4bn for holding and IDR 3.5bn for matching in full. Pilot the bundle in the most HematMart-exposed stores first and monitor whether the volume lift materializes.", rubric: [{ label: "Recommends differentiating", concepts: ["differentiate", "loyalty", "bundle", "4%"] }, { label: "Cites the gross-profit comparison", concepts: ["4.6", "4.4", "3.5"] }, { label: "Names a pilot or monitoring next step", concepts: ["pilot", "monitor", "exposed stores", "next step"] }] },
  },
  nadiarmobile: {
    shareinsight: { type: "short", prompt: "What's the real story behind Nadiar's and Competitor Z's share changes?", instruction: "In 2–4 lines, state both operators' percentage-point change and their relative growth rate, and what the divergence means.", responsePrompt: "Percentage-point change → relative growth rate → what the divergence means", modelAnswer: "Nadiar's share rose 5 percentage points (20% to 25%), more than Competitor Z's 4-point gain (10% to 14%). But in relative terms, Competitor Z grew faster — 40% versus Nadiar's 25% — so Competitor Z is closing the gap proportionally even though Nadiar leads on absolute percentage points.", rubric: [{ label: "States the percentage-point change for both operators (5pp, 4pp)", concepts: ["5", "4", "percentage point", "pp"] }, { label: "States the relative growth rate for both (25%, 40%)", concepts: ["25%", "40%", "relative", "growth rate"] }, { label: "Explains the divergence between the two metrics", concepts: ["even though", "proportionally", "faster", "leads"] }] },
    decision: { type: "short", prompt: "What should Nadiar recommend?", instruction: "Answer first, then cite two case facts and one condition or next step.", responsePrompt: "Recommendation → evidence → condition / next step", modelAnswer: "Price the new tier at IDR 30,000, since it maximizes monthly profit at IDR 800m versus IDR 750m at the revenue-maximizing IDR 25,000 price. Total incremental annual cost is IDR 2,160m, which this profit comfortably covers. Monitor Competitor Z's faster relative share growth even though Nadiar leads on percentage points.", rubric: [{ label: "Recommends the IDR 30,000 price", concepts: ["30,000", "30000", "profit"] }, { label: "Cites the profit-vs-revenue or cost evidence", concepts: ["800", "750", "2,160", "2160"] }, { label: "Names a monitoring condition or next step", concepts: ["monitor", "competitor z", "relative", "watch"] }] },
  },
};

caseLibrary.forEach(caseItem => Object.entries(shortResponseOverrides[caseItem.id]).forEach(([id, override]) => Object.assign(caseItem.questions.find(question => question.id === id), override)));

let activeCase = caseLibrary[0];
const state = { screen: "welcome", mode: "timed", lastCaseId: null, index: 0, answers: {}, reasoning: {}, evaluations: {}, transcript: [], optionSeed: 1, seconds: CASE_MINUTES * 60, deadline: null, timer: null, videoTimer: null, prepSeconds: 60, recordingSeconds: 60, stream: null, recorder: null, recorded: false, onboardingStep: 0, lastAttemptId: null };
const app = document.querySelector("#app");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

const demoCandidates = [
  { id: "demo-aisha", name: "Aisha Rahman", role: "Strategy Analyst", title: "SuryaGrid 2030 Transition", mode: "Timed", score: 91, skills: { "Problem structuring": 92, "Quantitative reasoning": 88, "Data interpretation": 94, "Business judgment": 91, "Synthesis": 89 }, mistakes: [{ category: "Quantitative reasoning" }], date: "Today", status: "Recommended", videoRecorded: true, integrity: "No review flags" },
  { id: "demo-lucas", name: "Lucas Martin", role: "Business Analyst", title: "PacificPack Circularity", mode: "Timed", score: 86, skills: { "Problem structuring": 88, "Quantitative reasoning": 84, "Data interpretation": 90, "Business judgment": 82, "Synthesis": 85 }, mistakes: [{ category: "Business judgment" }], date: "Today", status: "Complete", videoRecorded: true, integrity: "No review flags" },
  { id: "demo-priya", name: "Priya Nair", role: "Graduate Consultant", title: "ArchipelagoCare Access", mode: "Timed", score: 78, skills: { "Problem structuring": 82, "Quantitative reasoning": 73, "Data interpretation": 81, "Business judgment": 76, "Synthesis": 75 }, mistakes: [{ category: "Quantitative reasoning" }, { category: "Synthesis" }], date: "Today", status: "Needs review", videoRecorded: false, integrity: "2 focus-change events — context required" },
  { id: "demo-james", name: "James Okafor", role: "Associate Consultant", title: "NusaSip × BrewPack", mode: "Timed", score: 84, skills: { "Problem structuring": 80, "Quantitative reasoning": 90, "Data interpretation": 83, "Business judgment": 79, "Synthesis": 84 }, mistakes: [{ category: "Business judgment" }], date: "Yesterday", status: "Complete", videoRecorded: true, integrity: "No review flags" },
];

const skillCategories = ["Problem structuring", "Quantitative reasoning", "Data interpretation", "Business judgment", "Synthesis"];

function loadHistory() {
  try { return JSON.parse(localStorage.getItem("caseforge-practice-history") || "[]"); } catch { return []; }
}

function skillAverages(history) {
  return skillCategories.map(name => [name, Math.round(history.reduce((sum, item) => sum + item.skills[name], 0) / history.length)]).sort((a, b) => a[1] - b[1]);
}

function categoryPoints(caseItem) {
  return caseItem.questions.reduce((points, question) => ({ ...points, [question.category]: (points[question.category] || 0) + question.points }), {});
}

function pickCase(availableCases) {
  const history = loadHistory();
  if (!history.length) return availableCases[Math.floor(Math.random() * availableCases.length)];
  const [focus] = skillAverages(history)[0];
  const weights = availableCases.map(caseItem => 1 + (categoryPoints(caseItem)[focus] || 0) / 10);
  let roll = Math.random() * weights.reduce((sum, weight) => sum + weight, 0);
  for (let index = 0; index < availableCases.length; index += 1) {
    roll -= weights[index];
    if (roll <= 0) return availableCases[index];
  }
  return availableCases[availableCases.length - 1];
}

function saveAttempt(attempt) {
  try {
    const history = [attempt, ...loadHistory()].slice(0, 12);
    localStorage.setItem("caseforge-practice-history", JSON.stringify(history));
  } catch { /* History is optional when browser storage is unavailable. */ }
}

function loadReviewStatuses() {
  try { return JSON.parse(localStorage.getItem("caseforge-review-statuses") || "{}"); } catch { return {}; }
}

function saveReviewStatus(id, status) {
  try { localStorage.setItem("caseforge-review-statuses", JSON.stringify({ ...loadReviewStatuses(), [id]: status })); } catch { /* Optional local demo state. */ }
}

function recruiterCandidates() {
  const statuses = loadReviewStatuses();
  const local = loadHistory().map((item, index) => ({
    ...item,
    id: item.id || `local-${index}-${item.date}`,
    name: "You (local attempt)",
    role: "Candidate practice record",
    status: "Complete",
    integrity: "No monitoring data collected",
  }));
  return [...local, ...demoCandidates].map(candidate => ({ ...candidate, status: statuses[candidate.id] || candidate.status }));
}

function recruiterView(selectedId = null, filter = "all") {
  const all = recruiterCandidates();
  const candidates = all.filter(candidate => filter === "all" || candidate.status.toLowerCase().replace(" ", "-") === filter);
  const selected = all.find(candidate => candidate.id === selectedId) || candidates[0] || all[0];
  const average = Math.round(all.reduce((sum, candidate) => sum + candidate.score, 0) / Math.max(1, all.length));
  shell(`<section class="recruiter-shell"><header class="recruiter-hero"><div><p class="eyebrow">RECRUITER REVIEW · LOCAL DEMO</p><h1>Assessment review queue</h1><p>Use results as structured evidence for a human conversation—not an automatic hiring decision.</p></div><button class="back-candidate" id="backCandidate">← Back to candidate practice</button></header><section class="recruiter-metrics"><article><small>CANDIDATES</small><b>${all.length}</b><span>Local + synthetic demo cohort</span></article><article><small>AVERAGE SCORE</small><b>${average}</b><span>Across completed assessments</span></article><article><small>RECOMMENDED</small><b>${all.filter(c => c.status === "Recommended").length}</b><span>Requires recruiter confirmation</span></article><article><small>REVIEW FLAGS</small><b>${all.filter(c => c.integrity !== "No review flags" && c.integrity !== "No monitoring data collected").length}</b><span>Signals, not verdicts</span></article></section><section class="review-controls"><div class="review-tabs">${[["all", "All candidates"], ["recommended", "Recommended"], ["complete", "Complete"], ["needs-review", "Needs review"]].map(([key, label]) => `<button class="review-filter ${filter === key ? "active" : ""}" data-filter="${key}">${label}</button>`).join("")}</div><p>Scores combine case evidence and capability results; video delivery remains human-reviewed.</p></section><section class="review-layout"><div class="review-list"><div class="review-list-head"><b>Candidate</b><b>Status</b><b>Score</b><b>Evidence</b></div>${candidates.sort((a,b) => b.score - a.score).map(candidate => `<button class="candidate-row ${selected?.id === candidate.id ? "selected" : ""}" data-candidate-id="${candidate.id}"><span><strong>${candidate.name}</strong><small>${candidate.role} · ${candidate.title}</small></span><em class="status ${candidate.status.toLowerCase().replace(" ", "-")}">${candidate.status}</em><b>${candidate.score}</b><i>${candidate.integrity === "No review flags" || candidate.integrity === "No monitoring data collected" ? "Evidence ready" : "Review signal"}</i></button>`).join("")}</div>${selected ? recruiterDetail(selected) : ""}</section></section>`);
  document.querySelector("#backCandidate").onclick = welcome;
  document.querySelectorAll(".review-filter").forEach(button => button.onclick = () => recruiterView(null, button.dataset.filter));
  document.querySelectorAll(".candidate-row").forEach(button => button.onclick = () => recruiterView(button.dataset.candidateId, filter));
  const progress = document.querySelector("#progressCandidate");
  if (progress) progress.onclick = () => { saveReviewStatus(selected.id, "Recommended"); recruiterView(selected.id, filter); };
  const note = document.querySelector(".review-note");
  if (note) note.onclick = () => { note.textContent = "Reviewer note recorded"; note.disabled = true; };
  const roleSlot = document.querySelector(".practice-label");
  if (roleSlot) {
    roleSlot.innerHTML = `<span class="role-toggle"><button id="toggleCandidate">Candidate practice</button><button class="active" id="toggleRecruiter">Recruiter view</button></span>`;
    document.querySelector("#toggleCandidate").onclick = welcome;
  }
}

function recruiterDetail(candidate) {
  const skills = Object.entries(candidate.skills || {});
  const missed = [...new Set((candidate.mistakes || []).map(item => item.category))];
  return `<aside class="candidate-report"><div class="report-head"><div class="report-avatar">${candidate.name.split(" ").map(word => word[0]).join("").slice(0,2)}</div><div><h2>${candidate.name}</h2><p>${candidate.role}</p></div><span class="status ${candidate.status.toLowerCase().replace(" ", "-")}">${candidate.status}</span></div><section><h3>Assessment evidence</h3><p><b>${candidate.title}</b> · ${candidate.mode} · ${candidate.date}</p><div class="report-score"><b>${candidate.score}</b><span>/ 100 overall score</span></div></section><section><h3>Capability profile</h3>${skills.map(([name, score]) => `<div class="report-skill"><span>${name}</span><b>${score}</b><i><em style="width:${score}%"></em></i></div>`).join("")}</section><section><h3>Review notes</h3><p><b>Likely drill areas:</b> ${missed.length ? missed.join(", ") : "No material weak area identified"}</p><p><b>Video:</b> ${candidate.videoRecorded ? "Recorded; review answer-first structure and delivery." : "No recording available in this demo."}</p><p><b>Integrity context:</b> ${candidate.integrity}</p></section><div class="report-actions"><button class="primary" id="progressCandidate">Move to interview</button><button class="review-note">Add reviewer note</button></div><small class="human-note">Human review required: scores and interaction signals are decision support, not an automated hiring outcome.</small></aside>`;
}

function historyHtml() {
  const history = loadHistory();
  if (!history.length) return `<section class="history-card"><div><p class="eyebrow">ATTEMPT HISTORY</p><h2>Your trend will appear here.</h2><p>Complete a case to save the score and the capability to drill next.</p></div></section>`;
  const latest = history.slice(0, 4);
  const averages = skillAverages(history);
  return `<section class="history-card"><div><p class="eyebrow">ATTEMPT HISTORY</p><h2>Keep drilling ${averages[0][0].toLowerCase()}.</h2><p>Your average is ${averages[0][1]}% in this capability across ${history.length} saved attempt${history.length === 1 ? "" : "s"}.</p><p class="rotation-note">Random case picks are now weighted toward ${averages[0][0].toLowerCase()} until this improves — heavier on that skill, not exclusive to it.</p></div><div class="history-list">${latest.map(item => `<div><span>${item.title}</span><small>${item.mode} · ${item.date}</small><b>${item.score}</b></div>`).join("")}</div></section>`;
}

function coachHtml() {
  const history = loadHistory();
  if (!history.length) return "";
  const misses = history.flatMap(item => item.mistakes || []);
  const grouped = Object.entries(misses.reduce((all, item) => ({ ...all, [item.category]: (all[item.category] || 0) + 1 }), {})).sort((a, b) => b[1] - a[1]);
  const focus = grouped[0]?.[0] || "Quantitative reasoning";
  return `<section class="coach-dashboard"><div><p class="eyebrow">PERSONAL COACH</p><h2>Your next drill: ${focus.toLowerCase()}.</h2><p>${grouped.length ? `${grouped[0][1]} saved miss${grouped[0][1] === 1 ? "" : "es"} point here. Run a short focused drill before your next full case.` : "Your recent work is balanced—use a timed case to keep it that way."}</p><button class="drill-button" id="startDrill" data-focus="${focus}">Start 5-minute drill →</button></div><div class="notebook"><b>Mistake notebook</b>${grouped.length ? grouped.slice(0, 3).map(([category, count]) => `<span>${category}<em>${count}</em></span>`).join("") : "<span>No saved misses yet.</span>"}</div></section>`;
}

function serviceDashboardHtml() {
  const history = loadHistory();
  const readiness = history.length ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / history.length) : 0;
  const weakest = history.length ? skillAverages(history)[0] : ["Quantitative reasoning", 0];
  return `<section class="member-dashboard"><div class="member-heading"><div><p class="eyebrow">YOUR PREP OS</p><h2>Practice with a plan, not just more cases.</h2><p>Build case fluency, measure your readiness, and close your specific gaps.</p></div><span class="member-plan">Starter</span></div><div class="member-grid"><article><small>READINESS</small><strong>${history.length ? `${readiness}/100` : "—"}</strong><p>${history.length ? "Based on your recent attempts" : "Complete a case to establish a baseline"}</p></article><article><small>NEXT FOCUS</small><strong>${history.length ? weakest[0] : "First case"}</strong><p>${history.length ? `${weakest[1]}% current capability score` : "Start with a timed baseline"}</p></article><article><small>THIS WEEK</small><strong>${history.length}/3</strong><p>Suggested full simulations</p></article><article class="pro-card"><small>PRO PRACTICE</small><strong>Structured prep path</strong><p>Unlock custom plans, deeper drills, and expanded case packs.</p><button id="proPreview">Preview Pro →</button></article></div></section>`;
}

function proPreview() {
  const modal = `<div class="pro-modal-bg" id="proModal"><section class="pro-modal"><button id="closePro">×</button><p class="eyebrow">CASEFORGE PRACTICE PRO</p><h2>Turn preparation into a repeatable system.</h2><p>Pro is the paid layer this product is designed to grow into: more cases, structured study plans, advanced drill packs, and richer progress analysis.</p><div class="pro-benefits"><span>Unlimited case rotations</span><span>Targeted capability sprints</span><span>Advanced case packs</span><span>Detailed readiness trends</span></div><button class="primary" id="proInterest">Join product waitlist</button><small id="proStatus">No payment details are requested in this prototype.</small></section></div>`;
  document.body.insertAdjacentHTML("beforeend", modal);
  document.querySelector("#closePro").onclick = () => document.querySelector("#proModal").remove();
  document.querySelector("#proInterest").onclick = () => { document.querySelector("#proStatus").textContent = "Interest saved locally. A production version would connect this to authentication and checkout."; };
}

function drill(focus) {
  const prompts = { "Problem structuring": "Name the three non-overlapping data sets you would request before deciding whether to launch a new service.", "Quantitative reasoning": "A programme costs IDR 48bn and creates IDR 12bn annual savings. What is the simple payback period in years?", "Data interpretation": "A chart shows revenue up 12%, profit down 8%, and unit volume flat. What is the most likely first hypothesis?", "Business judgment": "Name one customer, one operational, and one execution risk to test before scaling a pilot.", "Synthesis": "In two sentences, make a recommendation, give one evidence-based reason, and name one next step." };
  shell(`<section class="drill-room"><p class="eyebrow">5-MINUTE FOCUSED DRILL</p><h1>${focus}</h1><div class="drill-bubble"><span>c</span><p><b>CaseForge</b>${prompts[focus]}</p></div><textarea id="drillResponse" placeholder="Write your answer here…"></textarea><button class="primary" id="saveDrill">Save drill reflection →</button><p class="fine" id="drillSaved"></p></section>`);
  document.querySelector("#saveDrill").onclick = () => { document.querySelector("#drillSaved").textContent = "Saved locally. Compare your response against the relevant case feedback, then return for a timed simulation."; };
}

function formatTime(seconds) {
  const min = String(Math.max(0, Math.floor(seconds / 60))).padStart(2, "0");
  const sec = String(Math.max(0, seconds % 60)).padStart(2, "0");
  return `${min}:${sec}`;
}

function validateCaseLibrary() {
  caseLibrary.forEach(caseItem => {
    if (!Array.isArray(caseItem.questions) || caseItem.questions.length !== 8) throw new Error(`${caseItem.id} must contain exactly 8 questions.`);
    const ids = new Set();
    const total = caseItem.questions.reduce((sum, question) => {
      if (ids.has(question.id)) throw new Error(`${caseItem.id} contains a duplicate question id: ${question.id}`);
      ids.add(question.id);
      if (!question.category || !question.type || question.answer === undefined || !question.points) throw new Error(`${caseItem.id}/${question.id} is missing required assessment data.`);
      if (question.type === "short" && (!question.responsePrompt || !question.modelAnswer || !Array.isArray(question.rubric) || question.rubric.length !== 3)) throw new Error(`${caseItem.id}/${question.id} needs a three-part short-answer rubric.`);
      if (question.exhibit && question.exhibit.rows.some(row => row.length !== question.exhibit.columns.length)) throw new Error(`${caseItem.id}/${question.id} has an invalid exhibit table.`);
      return sum + question.points;
    }, 0);
    if (total !== 90) throw new Error(`${caseItem.id} must total 90 scored points; received ${total}.`);
  });
}

function persistCurrentAttempt() {
  if (!activeCase || state.screen !== "case") return;
  writeActiveAttempt({ version: 4, caseId: activeCase.id, mode: state.mode, index: state.index, answers: state.answers, reasoning: state.reasoning, evaluations: state.evaluations, transcript: state.transcript, optionSeed: state.optionSeed, deadline: state.deadline, lastCaseId: state.lastCaseId, savedAt: Date.now() });
}

function restoreAttempt(attempt) {
  activeCase = caseLibrary.find(caseItem => caseItem.id === attempt.caseId) || caseLibrary[0];
  state.mode = attempt.mode === "practice" ? "practice" : "timed";
  state.index = Math.min(Math.max(0, attempt.index || 0), activeCase.questions.length - 1);
  state.answers = attempt.answers || {};
  state.reasoning = attempt.reasoning || {};
  state.evaluations = attempt.evaluations || {};
  state.transcript = attempt.transcript || transcriptFromAnswers();
  state.optionSeed = attempt.optionSeed || 1;
  state.deadline = attempt.deadline || null;
  state.lastCaseId = attempt.lastCaseId || activeCase.id;
  state.screen = "case";
  if (state.mode === "timed" && state.deadline && state.deadline <= Date.now()) { clearActiveAttempt(); videoRoom(); return; }
  renderQuestion();
  startTimer();
}

function formatTranscriptAnswer(answer) {
  if (answer && typeof answer === "object" && !Array.isArray(answer)) {
    const value = Array.isArray(answer.value) ? answer.value.join(", ") : answer.value;
    return `${escapeHtml(value)}${answer.reasoning ? `<span class="candidate-reasoning">${escapeHtml(answer.reasoning)}</span>` : ""}`;
  }
  if (Array.isArray(answer)) return answer.join(", ");
  return String(answer);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

function transcriptFromAnswers() {
  if (!activeCase) return [];
  return activeCase.questions.flatMap((question, index) => state.answers[question.id] === undefined ? [] : [{ questionIndex: index, prompt: question.prompt, answer: { value: state.answers[question.id], reasoning: state.reasoning[question.id] || "" }, exhibit: question.exhibit || null }]);
}

function transcriptHtml() {
  if (!state.transcript.length) return `<div class="chat-intro" role="status"><span>c</span><p><b>CaseForge</b> I’ll guide you through one business decision. Read each exhibit closely and send your best answer when ready.</p></div>`;
  return `<section class="chat-log" aria-live="polite">${state.transcript.map(turn => `<article class="chat-turn caseforge-turn"><span>c</span><div><b>CaseForge</b><p>${turn.prompt}</p>${turn.exhibit ? inlineExhibit(turn.exhibit) : ""}</div></article>${turn.answer === undefined ? "" : `<article class="chat-turn candidate-turn"><div><b>You</b><p>${formatTranscriptAnswer(turn.answer)}</p><small>Sent · locked</small></div></article>`}`).join("")}</section>`;
}

function exhibitCardsHtml(exhibit) {
  return exhibit.rows.map(row => `<div class="exhibit-card"><b>${row[0]}</b>${row.slice(1).map((cell, i) => `<div><small>${exhibit.columns[i + 1]}</small><em>${cell}</em></div>`).join("")}</div>`).join("");
}

function inlineExhibit(exhibit) {
  return `<details class="inline-exhibit"><summary>Attachment · ${exhibit.title} <span>View data</span></summary><div class="inline-table"><table><thead><tr>${exhibit.columns.map(column => `<th>${column}</th>`).join("")}</tr></thead><tbody>${exhibit.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="inline-cards">${exhibitCardsHtml(exhibit)}</div></details>`;
}

function startTimer() {
  clearInterval(state.timer);
  if (state.mode !== "timed") return;
  state.deadline ||= Date.now() + CASE_MINUTES * 60 * 1000;
  const update = () => {
    state.seconds = Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000));
    const node = document.querySelector("#timer");
    if (node) node.textContent = `◷ ${formatTime(state.seconds)}`;
    if (state.seconds <= 0) { clearInterval(state.timer); clearActiveAttempt(); videoRoom(); }
  };
  update();
  state.timer = setInterval(update, 1000);
}

function shell(content, assessment = false) {
  const modeLabel = state.mode === "practice" ? "Practice mode" : "Timed simulation";
  app.innerHTML = `<header class="topbar"><a class="brand" href="#" aria-label="Start page"><span>C</span>aseForge <em>practice</em></a>${assessment ? `<div class="progress-text">${modeLabel} · Question ${Math.min(state.index + 1, activeCase.questions.length)} of ${activeCase.questions.length}</div>${state.mode === "timed" ? `<div class="timer" id="timer" aria-label="Time remaining">◷ ${formatTime(state.seconds)}</div>` : ""}` : `<div class="practice-label">Independent consulting-style preparation</div>`}</header>${content}`;
  const scale = Number(localStorage.getItem("caseforge-font-scale") || "0");
  document.documentElement.dataset.fontScale = String(scale);
  document.querySelector(".topbar").insertAdjacentHTML("beforeend", `<div class="font-controls" aria-label="Text size"><button id="fontDown" ${scale <= 0 ? "disabled" : ""}>A−</button><button id="fontUp" ${scale >= 2 ? "disabled" : ""}>A+</button></div>`);
  document.querySelector("#fontDown").onclick = () => setFontScale(scale - 1);
  document.querySelector("#fontUp").onclick = () => setFontScale(scale + 1);
}

function setFontScale(scale) {
  const next = Math.max(0, Math.min(2, scale));
  localStorage.setItem("caseforge-font-scale", String(next));
  document.documentElement.dataset.fontScale = String(next);
  document.querySelector("#fontDown").disabled = next <= 0;
  document.querySelector("#fontUp").disabled = next >= 2;
  document.querySelector("#fontDown").onclick = () => setFontScale(next - 1);
  document.querySelector("#fontUp").onclick = () => setFontScale(next + 1);
}

function caseCardsHtml() {
  return `<section class="library"><div class="library-head"><div><p class="eyebrow">CASE LIBRARY</p><h2>Choose your next challenge.</h2></div><button class="random-case" id="randomCase">↻ Random case</button></div><div class="case-grid">${caseLibrary.map(caseItem => `<article class="case-tile"><div><span class="difficulty">${caseItem.difficulty || "Hard"}</span><h3>${caseItem.title}</h3><p>${caseItem.situation}</p></div><footer><small>8 questions · 30 min · feedback</small><button class="choose-case" data-case-id="${caseItem.id}">Start →</button></footer></article>`).join("")}</div></section>`;
}

const formulaGroups = [
  {
    title: "Profitability & margins",
    formulas: [
      ["Operating profit", "Profit = Revenue − Total operating costs", "The starting point for almost every quant question in this simulator — e.g. NusaSip, BumiBite, Anggun Living, Java Mart."],
      ["Margin per unit", "Margin = Price per unit − Cost per unit", "Multiply by volume to get total profit. Used directly in Java Mart and Nadiar Mobile."],
      ["Margin %", "Margin % = (Price − Cost) ÷ Price × 100", "Same idea as margin per unit, expressed as a share of price instead of a currency amount."],
      ["Blended (weighted-average) margin", "Blended margin = Σ (segment revenue share × segment margin %)", "Each segment counts in proportion to its share of revenue, not equally. See Anggun Living's mix-shift question."],
      ["Break-even volume", "Break-even volume = Fixed costs ÷ Contribution margin per unit", "The volume needed to cover fixed costs exactly; below this, the activity loses money."],
    ],
  },
  {
    title: "Growth, change & comparison",
    formulas: [
      ["Percentage change", "% change = (New − Old) ÷ Old × 100", "A relative measure — always read it against the base value, not the raw difference."],
      ["Percentage points (pp)", "pp change = New % − Old %", "An absolute difference between two percentages. Not the same number as percentage change — see Nadiar Mobile's share question, where the two metrics disagree about who's \"winning.\""],
      ["CAGR", "CAGR = (Ending value ÷ Beginning value)^(1 ÷ years) − 1", "The single steady annual growth rate that would take you from the start value to the end value."],
      ["Index number", "Index = (Value in period ÷ Value in base period) × 100", "Rebases a series so the base period equals 100, making relative changes easy to compare at a glance."],
    ],
  },
  {
    title: "Capacity & supply",
    formulas: [
      ["Spare capacity", "Spare capacity = Maximum capacity − Existing committed volume", "What's left over after contractual or current commitments. See the capacity questions in NusaSip, BumiBite, and VoltaRide."],
      ["Capacity gap", "Capacity gap = Required demand − Available capacity", "A positive gap means demand can't be met from this source alone — you need another supplier, more capex, or higher utilization."],
    ],
  },
  {
    title: "Investment, valuation & risk",
    formulas: [
      ["Valuation from a multiple", "Valuation = Multiple × Profit impact", "A ceiling on what to pay, not a reason to pay it — see the acquisition decisions in NusaSip and BumiBite."],
      ["Payback period", "Payback (months) = Capex ÷ Net monthly cash flow", "How long it takes an investment to pay for itself. Used in VoltaRide's fleet decision."],
      ["Expected value (EV)", "EV = Σ (Probability of each scenario × Outcome in that scenario)", "A probability-weighted average outcome across scenarios — not the best case, not the worst case."],
      ["Risk-adjusted value", "Risk-adjusted value = Expected value − Certain costs", "Net the EV against any cost you'll pay regardless of outcome, like a one-off campaign or launch spend."],
    ],
  },
  {
    title: "Market sizing & pricing",
    formulas: [
      ["Top-down market sizing", "Market size = Population × Addressable % × Penetration % × Frequency × Price", "Chain simple, defensible assumptions together — see VoltaRide's ride-demand sizing."],
      ["Revenue vs. profit", "Revenue = Price × Quantity; Profit = (Price − Unit cost) × Quantity", "The price that maximizes revenue is rarely the price that maximizes profit once unit cost is positive — see Nadiar Mobile."],
      ["Price elasticity of demand", "Elasticity = (% change in quantity) ÷ (% change in price)", "How sharply demand reacts to a price move; low elasticity means customers keep buying even as price rises."],
    ],
  },
];

const glossaryTerms = [
  ["MECE", "Mutually Exclusive, Collectively Exhaustive. A good structuring answer covers every relevant angle once each, with no overlap and no gaps — the standard every \"select five datasets\" question is graded against."],
  ["Fixed costs", "Costs that don't change with volume in the short run, like rent or base salaries."],
  ["Variable costs", "Costs that scale with volume, like materials or per-unit labor."],
  ["CapEx", "Capital expenditure: one-off spending on assets such as a fleet, a factory, or equipment."],
  ["OpEx", "Operating expenditure: the recurring cost of running the business day to day."],
  ["EBITDA", "Earnings Before Interest, Taxes, Depreciation, and Amortization — a rough proxy for operating cash profit."],
  ["Net margin", "Net profit ÷ revenue, after every cost including interest and tax — narrower than gross or contribution margin."],
  ["Contribution margin", "Price minus variable cost per unit. Excludes fixed costs, so it shows what each extra unit sold contributes toward covering them."],
  ["Cannibalization", "When a new product, channel, or price takes sales away from your own existing business instead of from competitors."],
  ["Synergy", "A saving or revenue gain that only exists because two things are combined — e.g. shifting production in-house after an acquisition."],
  ["Run rate", "What a recent period's results would total if extrapolated for a full year — e.g. a \"Month-6 run rate\" annualized."],
  ["Guardrail", "A constraint a recommendation must not breach, such as \"reliability cannot decline\" or \"tariffs cannot rise more than 0.6%.\""],
  ["Portfolio", "In a case context, a bundle of initiatives or interventions chosen together and evaluated against the same constraints."],
  ["Utilization", "How intensively an asset is used, e.g. rides per scooter per day. Raising utilization can substitute for buying more assets."],
  ["Decoy", "An answer option that sounds plausible but isn't actually relevant to this decision. The skill is recognizing what matters for THIS objective, not data in general."],
  ["Weighted average", "An average where each component counts in proportion to its share of the total, not equally — e.g. a blended margin across a product mix."],
  ["Opportunity cost", "The value of the next-best alternative you give up by choosing one option over another."],
  ["TAM / SAM / SOM", "Total addressable market, serviceable addressable market, and serviceable obtainable market — each a narrower subset of the one before it."],
];

const caseTraps = [
  ["Revenue-max price ≠ profit-max price", "The price that sells the most (or earns the most revenue) is rarely the price that earns the most profit, once you subtract a positive unit cost. Check both before recommending a price.", "Nadiar Mobile"],
  ["Percentage points vs. percentage change", "\"+5 percentage points\" and \"+25% growth\" can both describe the same shift, and which metric \"wins\" can flip depending on which two things you're comparing.", "Nadiar Mobile"],
  ["Mismatched time periods", "A table mixing quarterly, monthly, and annual figures will quietly give you the wrong total unless you convert everything to the same period first.", "Nadiar Mobile"],
  ["Revenue up, profit down", "Don't stop at the headline — check whether the sales mix shifted toward a lower-margin segment before concluding costs spiraled.", "Anggun Living"],
  ["\"Feels safer\" isn't \"more profitable\"", "Matching a competitor's price cut looks like the defensive, low-risk move, but the margin math can make it the worst option on the table.", "Java Mart"],
  ["A valuation ceiling isn't a recommendation", "A maximum bid tells you the most you should pay, not that you should acquire at all — check capacity and launch economics first.", "NusaSip, BumiBite"],
];

function referenceView() {
  shell(`<section class="reference-page">
    <header class="reference-hero">
      <p class="eyebrow">STUDY GUIDE</p>
      <h1>Glossary &amp; formulas</h1>
      <p>The vocabulary and math behind every question in this simulator. Skim it once, keep it open in a second tab during practice — CaseForge never penalizes you for knowing the formulas cold, only for not setting them up correctly.</p>
      <button class="text-button" id="backToWelcome">← Back to case library</button>
    </header>
    ${formulaGroups.map(group => `<section class="reference-block"><h2>${group.title}</h2><div class="formula-grid">${group.formulas.map(([name, formula, note]) => `<article class="formula-card"><b>${name}</b><code>${formula}</code><p>${note}</p></article>`).join("")}</div></section>`).join("")}
    <section class="reference-block">
      <h2>Glossary</h2>
      <div class="glossary-grid">${glossaryTerms.map(([term, def]) => `<article class="glossary-term"><b>${term}</b><p>${def}</p></article>`).join("")}</div>
    </section>
    <section class="reference-block traps">
      <h2>Traps CaseForge likes to set</h2>
      <p class="traps-intro">Six patterns that show up across this case library — and in the real assessment.</p>
      <div class="trap-grid">${caseTraps.map(([title, note, caseRef]) => `<article class="trap-card"><b>${title}</b><p>${note}</p><small>See: ${caseRef}</small></article>`).join("")}</div>
    </section>
  </section>`);
  document.querySelector("#backToWelcome").onclick = welcome;
}

function welcome() {
  state.screen = "welcome";
  shell(`<section class="welcome">
    <div class="welcome-copy">
      <p class="eyebrow">CONSULTING-STYLE ONLINE CASE</p>
      <h1>A calm, realistic CaseForge practice run.</h1>
      <p class="lede">Nine rotating cases: six hard commercial cases and three very-hard, multi-objective cases. Each run opens with a client framing exchange, then eight scored questions, exhibits, quantitative reasoning, and a one-minute recommendation.</p>
      <div class="setup-cards"><div><span>9</span><small>Rotating cases</small></div><div><span>8</span><small>Sequential questions</small></div><div><span>1 min</span><small>Video close</small></div></div>
      <div class="mode-picker"><button class="mode selected" data-mode="timed"><b>Timed simulation</b><small>30 minutes · feedback at the end</small></button><button class="mode" data-mode="practice"><b>Practice mode</b><small>No timer · answer feedback as you go</small></button></div>
      <button class="primary large" id="start">Begin timed simulation <span>→</span></button>
      <button class="text-button" id="openReference">📚 Glossary &amp; formulas study guide →</button>
      <p class="fine">Calculator, paper, and pen are allowed. Answers lock when you continue. This is an original case-interview simulator built for candidate practice and recruiter screening.</p>
    </div>
    <aside class="case-card"><div class="case-icon">⌁</div><p class="eyebrow">ROTATING CASE LIBRARY</p><h2>Commercial + public-impact strategy</h2><p>Attempts rotate across acquisition, pricing diagnosis, market entry, competitive response, climate transition, health-care access, and circular-packaging decisions with real trade-offs.</p><div class="objective"><span>Objective</span><b>Make a recommendation that balances the true decision constraints—not just the financial answer.</b></div></aside>
  </section>${serviceDashboardHtml()}${caseCardsHtml()}${coachHtml()}${historyHtml()}`);
  document.querySelectorAll(".mode").forEach(button => button.onclick = () => {
    state.mode = button.dataset.mode;
    document.querySelectorAll(".mode").forEach(x => x.classList.toggle("selected", x === button));
    document.querySelector("#start").innerHTML = `Begin ${state.mode === "practice" ? "practice mode" : "timed simulation"} <span>→</span>`;
  });
  document.querySelector("#start").onclick = () => onboarding(state.mode);
  document.querySelector("#openReference").onclick = referenceView;
  document.querySelector("#randomCase").onclick = () => onboarding(state.mode);
  document.querySelectorAll(".choose-case").forEach(button => button.onclick = () => onboarding(state.mode, button.dataset.caseId));
  if (document.querySelector("#startDrill")) document.querySelector("#startDrill").onclick = event => drill(event.currentTarget.dataset.focus);
  document.querySelector("#proPreview").onclick = proPreview;
  const saved = readActiveAttempt();
  if (saved && caseLibrary.some(caseItem => caseItem.id === saved.caseId)) {
    document.querySelector(".welcome-copy").insertAdjacentHTML("beforeend", `<div class="resume-card"><b>Assessment in progress</b><span>Your previous ${saved.mode} attempt is saved on this browser.</span><button id="resumeAttempt">Resume →</button><button id="discardAttempt">Discard</button></div>`);
    document.querySelector("#resumeAttempt").onclick = () => restoreAttempt(saved);
    document.querySelector("#discardAttempt").onclick = () => { clearActiveAttempt(); welcome(); };
  }
  const roleSlot = document.querySelector(".practice-label");
  if (roleSlot) {
    roleSlot.innerHTML = `<span class="role-toggle"><button class="active" id="toggleCandidate">Candidate practice</button><button id="toggleRecruiter">Recruiter view</button></span>`;
    document.querySelector("#toggleRecruiter").onclick = () => recruiterView();
  }
}

function onboarding(mode, selectedCaseId = null) {
  state.mode = mode;
  state.onboardingStep = 0;
  shell(`<section class="onboarding"><p class="eyebrow">ASSESSMENT SETUP</p><div class="onboarding-progress"><i class="active"></i><i></i><i></i></div><h1>Before we begin.</h1><div class="onboarding-card" id="onboardingCard"></div><button class="primary large" id="onboardingNext">Continue →</button><button class="text-button" id="cancelOnboarding">Back to library</button></section>`);
  const steps = [
    ["What you need", "Use a calculator, paper, and pen. Timed mode locks answers after they are sent; Practice mode gives immediate feedback."],
    ["Device and privacy", "Camera recording is optional practice only. If you start it, the browser requests permission; nothing is uploaded or retained by this simulator."],
    ["One warm-up", "A client has revenue of IDR 120bn and costs of IDR 95bn. What is operating profit?", "25"],
  ];
  const renderStep = () => {
    const [title, copy, answer] = steps[state.onboardingStep];
    document.querySelector("#onboardingCard").innerHTML = `<h2>${title}</h2><p>${copy}</p>${answer ? `<label>Answer <input id="warmupAnswer" inputmode="decimal" placeholder="IDR billion" /></label><small id="warmupFeedback"></small>` : ""}`;
    document.querySelectorAll(".onboarding-progress i").forEach((dot, index) => dot.classList.toggle("active", index <= state.onboardingStep));
    document.querySelector("#onboardingNext").textContent = state.onboardingStep === steps.length - 1 ? "Start assessment →" : "Continue →";
  };
  renderStep();
  document.querySelector("#onboardingNext").onclick = () => {
    if (state.onboardingStep === 2) {
      const feedback = document.querySelector("#warmupFeedback");
      if (document.querySelector("#warmupAnswer").value !== "25") { feedback.textContent = "Try one more time: profit = revenue − cost."; return; }
      start(mode, selectedCaseId);
      return;
    }
    state.onboardingStep += 1;
    renderStep();
  };
  document.querySelector("#cancelOnboarding").onclick = welcome;
}

function start(mode, selectedCaseId = null) {
  state.screen = "intro";
  state.mode = mode;
  const availableCases = caseLibrary.filter(caseItem => caseItem.id !== state.lastCaseId);
  activeCase = selectedCaseId ? caseLibrary.find(caseItem => caseItem.id === selectedCaseId) : pickCase(availableCases);
  state.lastCaseId = activeCase.id;
  state.seconds = CASE_MINUTES * 60;
  state.deadline = null;
  state.index = 0;
  state.answers = {};
  state.reasoning = {};
  state.evaluations = {};
  state.transcript = [];
  state.optionSeed = Math.floor(Math.random() * 2147483647) || 1;
  introExchange(activeCase, () => {
    state.screen = "case";
    renderQuestion();
    persistCurrentAttempt();
    startTimer();
  });
}

function introExchange(caseItem, onComplete) {
  const turn = openingClientTurns[caseItem.id];
  let selected = [];
  shell(`<section class="assessment-layout"><div class="case-pane"><div class="case-context"><p class="eyebrow">${caseItem.title.toUpperCase()} · UNGRADED WARM-UP</p><h1>Framing the decision</h1><p>${caseItem.context}</p></div>${exhibitHtml(null)}</div><section class="question-pane chat-pane"><div class="bot-note"><span>c</span><p><b>CaseForge</b> <small>Start by asking the client the questions that define the decision. CaseForge will answer only the questions you send.</small></p></div><div class="chat-meta"><span>CaseForge · ${caseItem.difficulty || "Hard"}</span><span>● online</span></div><div class="active-turn-divider"><span>Current turn</span></div><div class="question-head"><span class="pill">Framing</span><span class="locked">Not scored · clarify before the timer starts</span></div><h2>${turn.prompt}</h2><p class="instruction">${turn.instruction}</p><div class="choices multi client-questions">${turn.options.map(([key, label]) => `<button class="choice" data-value="${key}"><i>${key}</i><span>${label}</span><b>✓</b></button>`).join("")}</div><div class="question-footer"><button class="primary" id="continue" disabled>Continue <span>→</span></button></div></section></section>`);
  const continueBtn = document.querySelector("#continue");
  document.querySelectorAll(".choice").forEach(button => button.onclick = () => {
    document.querySelector(".client-correction")?.remove();
    button.classList.toggle("selected");
    selected = [...document.querySelectorAll(".choice.selected")].map(x => x.dataset.value);
    continueBtn.disabled = selected.length !== turn.answer.length;
  });
  continueBtn.onclick = () => {
    const correct = selected.length === turn.answer.length && selected.every(value => turn.answer.includes(value));
    if (!correct) {
      document.querySelectorAll(".choice").forEach(button => button.classList.remove("selected"));
      selected = [];
      continueBtn.disabled = true;
      document.querySelector(".question-footer").insertAdjacentHTML("beforebegin", `<div class="client-correction"><b>CaseForge</b><span>One of those questions is not decision-critical yet. Keep the conversation on the decision objective and the business scope; then try again.</span></div>`);
      return;
    }
    document.querySelectorAll(".choice").forEach(button => button.disabled = true);
    const replies = selected.map(key => `<li>${turn.clientResponses[key]}</li>`).join("");
    document.querySelector(".question-footer").insertAdjacentHTML("beforebegin", `<div class="client-reply"><span>c</span><div><b>CaseForge</b><p>Good starting questions. Here is what the client tells us:</p><ul>${replies}</ul><p>Let’s use that framing to begin the case.</p></div></div>`);
    continueBtn.disabled = false;
    continueBtn.innerHTML = "Begin the case <span>→</span>";
    continueBtn.onclick = onComplete;
  };
}

function exhibitHtml(exhibit, portfolioOptions = []) {
  if (!exhibit) return `<div class="exhibit empty-exhibit"><span>⌁</span><p>No additional exhibit is required for this question.</p><small>Use the client objective and your business judgment.</small></div>`;
  return `<aside class="exhibit"><div class="exhibit-head"><div><span>${exhibit.title}</span><small>${exhibit.note}</small></div><button class="expand" title="Exhibit is already shown at full readable size">⤢</button></div><div class="table-wrap"><table><thead><tr>${exhibit.columns.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${exhibit.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="exhibit-cards">${exhibitCardsHtml(exhibit)}</div></aside>`;
}

function portfolioMenuHtml(portfolios) {
  return `<section class="portfolio-menu"><div><span>Candidate portfolios</span><small>Each portfolio combines the initiatives shown in the exhibit.</small></div>${portfolios.map(([name, initiatives]) => `<article><b>Portfolio ${name}</b><p>${initiatives}</p></article>`).join("")}</section>`;
}

function openExhibitViewer(exhibit, portfolioOptions = []) {
  if (!exhibit) return;
  const viewer = `<div class="exhibit-viewer" id="exhibitViewer" role="dialog" aria-modal="true" aria-label="Expanded exhibit"><section><header><div><span>${exhibit.title}</span><small>${exhibit.note}</small></div><button id="closeExhibitViewer" aria-label="Close exhibit">×</button></header><div class="exhibit-viewer-table"><table><thead><tr>${exhibit.columns.map(column => `<th>${column}</th>`).join("")}</tr></thead><tbody>${exhibit.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="exhibit-viewer-cards">${exhibitCardsHtml(exhibit)}</div>${portfolioOptions.length ? portfolioMenuHtml(portfolioOptions) : ""}</section></div>`;
  document.body.insertAdjacentHTML("beforeend", viewer);
  const close = () => document.querySelector("#exhibitViewer")?.remove();
  document.querySelector("#closeExhibitViewer").onclick = close;
  document.querySelector("#exhibitViewer").onclick = event => { if (event.target.id === "exhibitViewer") close(); };
  document.addEventListener("keydown", function onKeydown(event) { if (event.key === "Escape") { close(); document.removeEventListener("keydown", onKeydown); } });
}

function optionOrder(q) {
  let seed = state.optionSeed >>> 0;
  for (const char of q.id) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619) >>> 0;
  const next = () => {
    seed = (seed + 0x6D2B79F5) >>> 0;
    let value = seed;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
  const ordered = [...q.options];
  for (let index = ordered.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(next() * (index + 1));
    [ordered[index], ordered[swapIndex]] = [ordered[swapIndex], ordered[index]];
  }
  return ordered;
}

function needsReasoning(q) {
  return q.type !== "short" && (q.category === "Data interpretation" || q.category === "Synthesis");
}

function answerControl(q) {
  if (q.type === "number") return `<label class="number-field"><span>Answer <small>${q.answerUnit || "IDR billion"}</small></span><input id="response" inputmode="decimal" autocomplete="off" placeholder="Enter a number" /><em>Use a minus sign for negative answers.</em></label>`;
  if (q.type === "short") return `<label class="short-answer-field"><span>Your response</span><small>${q.responsePrompt}</small><textarea id="response" placeholder="Write a concise, evidence-led answer…"></textarea><em>CaseForge scores the ideas you make visible, not a single exact wording.</em></label>`;
  const options = optionOrder(q);
  if (q.type === "single") return `<div class="choices single">${options.map(([key, label]) => `<button class="choice" data-value="${key}"><i>${key}</i><span>${label}</span></button>`).join("")}</div>`;
  return `<div class="choices multi">${options.map(([key, label]) => `<button class="choice" data-value="${key}"><i>${key}</i><span>${label}</span><b>✓</b></button>`).join("")}</div>`;
}

function renderQuestion() {
  const q = activeCase.questions[state.index];
  if (activeCase.id === "suryagrid") {
    q.answerUnit = { target: "million tCO₂e", cost: "IDR thousand / tCO₂e", score: "score / 100" }[q.id] || q.answerUnit;
  }
  shell(`<section class="assessment-layout"><div class="case-pane"><div class="case-context"><p class="eyebrow">${activeCase.title.toUpperCase()}</p><h1>${q.category}</h1><p>${activeCase.context}</p></div>${exhibitHtml(q.exhibit)}</div><section class="question-pane"><div class="bot-note"><span>c</span><p><b>CaseForge</b> <small>${state.index === 0 ? "Start by selecting the information that lets you test the full business case." : "Use the exhibit, then choose the most defensible answer."}</small></p></div><div class="question-head"><span class="pill">${q.category}</span><span class="locked">${state.mode === "practice" ? "Immediate feedback is on" : "Answers lock after you continue"}</span></div><h2>${q.prompt}</h2><p class="instruction">${q.instruction}</p>${answerControl(q)}<div class="question-footer"><button class="calculator" id="calculator">⌗ Calculator</button><button class="primary" id="continue" disabled>Continue <span>→</span></button></div></section></section><div class="calc-popover hidden" id="calc"><div><b>Calculator</b><button id="closeCalc">×</button></div><input id="calcDisplay" value="0" readonly /><section class="calc-keys">${["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"].map(k => `<button data-key="${k}">${k}</button>`).join("")}<button class="clear" data-key="clear">Clear</button></section></div>`, true);
  if (q.portfolioOptions) document.querySelector(".case-pane").insertAdjacentHTML("beforeend", portfolioMenuHtml(q.portfolioOptions));
  document.querySelector(".expand")?.addEventListener("click", () => openExhibitViewer(q.exhibit, q.portfolioOptions || []));
  document.querySelector(".question-pane").classList.add("chat-pane");
  document.querySelector(".question-pane").insertAdjacentHTML("afterbegin", transcriptHtml());
  document.querySelector(".question-head").insertAdjacentHTML("beforebegin", `<div class="active-turn-divider"><span>Current turn</span></div>`);
  document.querySelector(".question-head").insertAdjacentHTML("beforebegin", `<div class="chat-meta"><span>CaseForge · ${activeCase.difficulty || "Hard"}</span><span>● online</span></div>`);
  if (state.mode === "practice") {
    document.querySelector(".question-pane").insertAdjacentHTML("afterbegin", `<nav class="practice-nav">${activeCase.questions.map((question, index) => `<button class="${index === state.index ? "current" : ""}" data-practice-index="${index}" ${index > state.index ? "disabled" : ""}>${index + 1}${state.answers[question.id] !== undefined ? " ✓" : ""}</button>`).join("")}</nav>`);
    document.querySelectorAll("[data-practice-index]").forEach(button => button.onclick = () => { state.index = Number(button.dataset.practiceIndex); renderQuestion(); });
  }
  document.querySelector(".case-context .eyebrow").textContent = `${activeCase.difficulty || "Hard"} · ${activeCase.title}`;
  if (needsReasoning(q)) document.querySelector(".question-footer").insertAdjacentHTML("beforebegin", `<label class="reasoning-field">Tell CaseForge your reasoning <small>Use 2–4 concise lines: observation → implication → likely driver. This is required for interpretation and recommendation turns.</small><textarea id="reasoning" placeholder="State the evidence, what it means for the decision, and the likely driver or next step."></textarea></label>`);
  wireQuestion(q);
}

function wireQuestion(q) {
  const continueBtn = document.querySelector("#continue");
  let selected = q.type === "multi" ? (state.answers[q.id] || []) : (state.answers[q.id] ?? null);
  const reasoningInput = document.querySelector("#reasoning");
  if (reasoningInput && state.mode === "practice") reasoningInput.value = state.reasoning[q.id] || "";
  const answerReady = () => {
    if (q.type === "number" || q.type === "short") {
      const value = document.querySelector("#response")?.value.trim() || "";
      return q.type === "short" ? value.length >= 24 : value !== "" && !Number.isNaN(Number(value));
    }
    if (q.type === "multi") {
      const required = Array.isArray(q.answer) ? q.answer.length : 1;
      return selected.length === required;
    }
    return Boolean(selected);
  };
  const updateContinue = () => {
    const reasoningReady = !needsReasoning(q) || (reasoningInput?.value.trim().length || 0) >= 24;
    continueBtn.disabled = !(answerReady() && reasoningReady);
  };
  if (q.type === "number" || q.type === "short") {
    const input = document.querySelector("#response");
    if (state.mode === "practice" && selected !== null) input.value = selected;
    input.oninput = updateContinue;
    input.focus();
  } else {
    if (state.mode === "practice" && selected) document.querySelectorAll(".choice").forEach(button => button.classList.toggle("selected", Array.isArray(selected) ? selected.includes(button.dataset.value) : selected === button.dataset.value));
    document.querySelectorAll(".choice").forEach(button => button.onclick = () => {
      const value = button.dataset.value;
      if (q.type === "single") {
        document.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
        button.classList.add("selected");
        selected = value;
      } else {
        button.classList.toggle("selected");
        selected = [...document.querySelectorAll(".choice.selected")].map(x => x.dataset.value);
      }
      updateContinue();
      if (!document.querySelector(".response-ready")) document.querySelector(".question-footer").insertAdjacentHTML("beforebegin", `<div class="response-ready">You <span>Response ready to send</span></div>`);
    });
  }
  if (reasoningInput) {
    reasoningInput.oninput = updateContinue;
    reasoningInput.onblur = () => { if (reasoningInput.value.trim()) state.reasoning[q.id] = reasoningInput.value.trim(); };
  }
  updateContinue();
  continueBtn.onclick = () => {
    const answer = q.type === "number" ? Number(document.querySelector("#response").value) : q.type === "short" ? document.querySelector("#response").value.trim() : selected;
    const reasoning = reasoningInput?.value.trim() || "";
    state.answers[q.id] = answer;
    if (reasoning) state.reasoning[q.id] = reasoning;
    state.evaluations[q.id] = evaluateAnswer(q, answer);
    state.transcript = [...state.transcript.filter(turn => turn.questionIndex !== state.index), { questionIndex: state.index, prompt: q.prompt, answer: { value: answer, reasoning }, exhibit: q.exhibit || null }].sort((a, b) => a.questionIndex - b.questionIndex);
    persistCurrentAttempt();
    if (q.type === "short" && state.mode === "practice") return showShortPracticeCheck(q, answer, state.evaluations[q.id]);
    if (state.mode === "practice") return showPracticeCheck(q, answer);
    advanceQuestion();
  };
  calculator();
}

function advanceQuestion() {
  state.index += 1;
  persistCurrentAttempt();
  if (state.index >= activeCase.questions.length) { videoRoom(); return; }
  const pane = document.querySelector(".question-pane");
  if (!pane) { renderQuestion(); return; }
  pane.insertAdjacentHTML("beforeend", `<div class="caseforge-thinking" role="status"><span></span><span></span><span></span> CaseForge is reviewing your response…</div>`);
  document.querySelector("#continue").disabled = true;
  setTimeout(renderQuestion, 420);
}

function showPracticeCheck(q, answer) {
  const correct = isCorrect(q, answer);
  document.querySelectorAll(".choice").forEach(button => button.disabled = true);
  const input = document.querySelector("#response");
  if (input) input.readOnly = true;
  document.querySelector(".question-footer").insertAdjacentHTML("beforebegin", `<div class="instant-feedback ${correct ? "correct" : "incorrect"}"><b>CaseForge · ${correct ? "That’s a sound read" : "Let’s revisit the setup"}</b><span>${correct ? "Your answer matches the expected result. Keep this observation-and-implication structure for the next turn." : explain(q.id)}</span></div>`);
  const continueBtn = document.querySelector("#continue");
  continueBtn.disabled = false;
  continueBtn.innerHTML = state.index === activeCase.questions.length - 1 ? "Continue to recommendation <span>→</span>" : "Next question <span>→</span>";
  continueBtn.onclick = advanceQuestion;
}

function showShortPracticeCheck(q, answer, evaluation) {
  const input = document.querySelector("#response");
  if (input) input.readOnly = true;
  const met = evaluation.criteria.filter(criterion => criterion.met);
  const missed = evaluation.criteria.filter(criterion => !criterion.met);
  document.querySelector(".question-footer").insertAdjacentHTML("beforebegin", `<section class="short-feedback ${evaluation.correct ? "full" : "partial"}"><div><span>c</span><p><b>CaseForge · ${evaluation.earnedPoints}/${q.points} points</b>${evaluation.correct ? "You made each core decision point visible." : "Your response has a useful start; make the missing decision points explicit."}</p></div><section><b>Evidence CaseForge recognized</b>${met.length ? met.map(criterion => `<span class="rubric-chip met">✓ ${criterion.label}</span>`).join("") : "<span class=\"rubric-chip\">No required evidence recognized yet.</span>"}<b>Make explicit next time</b>${missed.length ? missed.map(criterion => `<span class="rubric-chip missed">+ ${criterion.label}</span>`).join("") : "<span class=\"rubric-chip met\">All core points covered</span>"}</section><details><summary>View a model response</summary><p>${q.modelAnswer}</p></details></section>`);
  const continueBtn = document.querySelector("#continue");
  continueBtn.disabled = false;
  continueBtn.innerHTML = state.index === activeCase.questions.length - 1 ? "Continue to recommendation <span>→</span>" : "Next question <span>→</span>";
  continueBtn.onclick = advanceQuestion;
}

function calculator() {
  const popover = document.querySelector("#calc");
  document.querySelector("#calculator").onclick = () => popover.classList.toggle("hidden");
  document.querySelector("#closeCalc").onclick = () => popover.classList.add("hidden");
  const display = document.querySelector("#calcDisplay");
  let expr = "";
  document.querySelectorAll("[data-key]").forEach(key => key.onclick = () => {
    const value = key.dataset.key;
    if (value === "clear") { expr = ""; display.value = "0"; return; }
    if (value === "=") {
      try { expr = String(Function(`"use strict"; return (${expr.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-")})`)()); display.value = expr; } catch { display.value = "Error"; expr = ""; }
      return;
    }
    expr += value;
    display.value = expr;
  });
}

function videoRoom() {
  clearInterval(state.timer);
  clearActiveAttempt();
  state.transcript.push({ questionIndex: activeCase.questions.length, prompt: activeCase.videoPrompt, exhibit: null });
  state.screen = "video";
  state.prepSeconds = 60;
  state.recordingSeconds = 60;
  state.recorded = false;
  renderVideo("prep");
}

function renderVideo(stage) {
  shell(`<section class="video-room"><div class="video-copy"><p class="eyebrow">FINAL RECOMMENDATION</p><span class="pill">One attempt</span><h1>${stage === "prep" ? "Take a minute to prepare your recommendation." : "Record your one-minute recommendation."}</h1><p>Advise NusaSip's CEO whether to acquire BrewPack and what to do next. Lead with your answer, give 2–3 reasons, then name one risk and next step.</p><div class="video-framework"><b>A useful 60-second shape</b><ol><li>Recommendation</li><li>Evidence: economics, capacity, and risk-adjusted launch value</li><li>Risk + next step</li></ol></div><button class="primary large" id="videoAction">${stage === "prep" ? "Start recording" : "Start 1-minute recording"} <span>→</span></button><button class="text-button" id="skipVideo">Skip camera practice and see feedback</button></div><aside class="video-card"><div class="video-top"><span class="live-dot"></span><span id="videoStatus">${stage === "prep" ? "PREPARATION" : "READY TO RECORD"}</span><b id="videoTimer">${formatTime(stage === "prep" ? state.prepSeconds : state.recordingSeconds)}</b></div><div class="camera"><video id="camera" autoplay muted playsinline></video><div class="camera-placeholder" id="cameraPlaceholder"><span>◉</span><b>Camera preview</b><small>Camera access is requested only when recording begins.</small></div></div><p class="video-tip">${stage === "prep" ? "Rehearse before you start—the assessment is waiting." : "Look at the camera, speak in headlines, and finish your final sentence."}</p></aside></section>`, true);
  document.querySelector(".video-copy").insertAdjacentHTML("afterbegin", `<div class="final-chat-turn"><span>c</span><p><b>CaseForge</b>${activeCase.videoPrompt}</p></div>`);
  document.querySelector(".video-copy > p:not(.eyebrow)").textContent = `${activeCase.videoPrompt} Lead with your answer, give 2–3 reasons, then name one risk and next step.`;
  document.querySelector("#skipVideo").onclick = feedback;
  document.querySelector("#videoAction").onclick = () => stage === "prep" ? beginRecording() : record();
  if (stage === "prep") {
    state.videoTimer = setInterval(() => {
      state.prepSeconds -= 1;
      const timer = document.querySelector("#videoTimer");
      if (timer) timer.textContent = formatTime(state.prepSeconds);
      if (state.prepSeconds <= 0) { clearInterval(state.videoTimer); beginRecording(); }
    }, 1000);
  }
}

async function beginRecording() {
  clearInterval(state.videoTimer);
  try {
    state.stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    renderVideo("record");
    const video = document.querySelector("#camera");
    video.srcObject = state.stream;
    document.querySelector("#cameraPlaceholder").classList.add("hidden");
  } catch {
    document.querySelector("#videoStatus").textContent = "CAMERA UNAVAILABLE";
    document.querySelector("#cameraPlaceholder").innerHTML = "<span>!</span><b>Camera permission was not granted</b><small>You can still complete the written simulation and view feedback.</small>";
    document.querySelector("#videoAction").textContent = "Continue to feedback →";
    document.querySelector("#videoAction").onclick = feedback;
  }
}

function record() {
  const status = document.querySelector("#videoStatus");
  const action = document.querySelector("#videoAction");
  if (!state.stream) return feedback();
  state.recorder = new MediaRecorder(state.stream);
  state.recorder.start();
  status.textContent = "RECORDING";
  action.disabled = true;
  action.textContent = "Recording…";
  state.videoTimer = setInterval(() => {
    state.recordingSeconds -= 1;
    const timer = document.querySelector("#videoTimer");
    if (timer) timer.textContent = formatTime(state.recordingSeconds);
    if (state.recordingSeconds <= 0) {
      clearInterval(state.videoTimer);
      state.recorder.stop();
      state.stream.getTracks().forEach(track => track.stop());
      state.recorded = true;
      feedback();
    }
  }, 1000);
}

function normalizeConcept(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9%]+/g, " ").trim();
}

function evaluateAnswer(question, answer) {
  if (question.type === "short") {
    const response = normalizeConcept(answer);
    const criteria = question.rubric.map(criterion => ({ ...criterion, met: criterion.concepts.some(concept => response.includes(normalizeConcept(concept))) }));
    const metCount = criteria.filter(criterion => criterion.met).length;
    return { correct: metCount === criteria.length, earnedPoints: Math.round(question.points * metCount / criteria.length * 10) / 10, criteria, explanation: metCount === criteria.length ? "Your response made all core decision points visible." : "Make the missing decision points explicit in your next response." };
  }
  const correct = question.type === "number" ? Math.abs(answer - question.answer) <= question.tolerance : question.type === "single" ? answer === question.answer : Array.isArray(answer) && answer.length === question.answer.length && answer.every(value => question.answer.includes(value));
  return { correct, earnedPoints: correct ? question.points : 0, criteria: [], explanation: correct ? "Your answer matches the expected result." : explain(question.id) };
}

function isCorrect(question, answer) {
  return evaluateAnswer(question, answer).correct;
}

function feedback() {
  clearInterval(state.timer);
  clearInterval(state.videoTimer);
  if (state.stream) state.stream.getTracks().forEach(track => track.stop());
  const results = activeCase.questions.map(q => ({ q, evaluation: state.evaluations[q.id] || evaluateAnswer(q, state.answers[q.id]), correct: (state.evaluations[q.id] || evaluateAnswer(q, state.answers[q.id])).correct }));
  const total = results.reduce((sum, r) => sum + r.evaluation.earnedPoints, 0);
  const categoryScore = name => {
    const rows = results.filter(r => r.q.category === name);
    const possible = rows.reduce((s, r) => s + r.q.points, 0);
    return possible ? Math.round(rows.reduce((s, r) => s + r.evaluation.earnedPoints, 0) / possible * 100) : null;
  };
  const score = Math.round(total / 90 * 100);
  const skills = Object.fromEntries(["Problem structuring", "Quantitative reasoning", "Data interpretation", "Business judgment", "Synthesis"].map(name => [name, categoryScore(name)]));
  state.lastAttemptId = `attempt-${Date.now()}`;
  saveAttempt({ id: state.lastAttemptId, title: activeCase.title, mode: state.mode === "practice" ? "Practice" : "Timed", score, skills, mistakes: results.filter(result => !result.correct).map(result => ({ category: result.q.category, question: result.q.prompt })), videoRecorded: state.recorded, date: new Date().toLocaleDateString() });
  const verdict = score >= 80 ? ["Strong practice performance", "Your approach is suitably structured and numerically reliable. Tighten the final verbal recommendation with a crisp caveat."] : score >= 60 ? ["Promising, with a clear next focus", "You have the backbone of a solid case approach. Accuracy and evidence selection are the fastest gains before test day."] : ["Build the mechanics before the next full run", "The case is doing its useful job: showing exactly where to drill. Focus first on setup before speed."];
  shell(`<section class="results"><div class="result-hero"><div><p class="eyebrow">PRACTICE FEEDBACK</p><h1>${verdict[0]}</h1><p>${verdict[1]}</p><button class="primary" id="restart">Try again <span>↻</span></button></div><div class="score-ring" style="--score:${score}"><div><b>${score}</b><small>/ 100</small></div></div></div><section class="feedback-grid"><article class="feedback-card performance"><h2>Performance by capability</h2>${[["Problem structuring", categoryScore("Problem structuring")], ["Quantitative reasoning", categoryScore("Quantitative reasoning")], ["Data interpretation", categoryScore("Data interpretation")], ["Business judgment", categoryScore("Business judgment")], ["Synthesis", categoryScore("Synthesis")]].map(([name, value]) => `<div class="capability"><div><span>${name}</span><b>${value}%</b></div><i><em style="width:${value}%"></em></i></div>`).join("")}<div class="video-score"><span>${state.recorded ? "✓ Video recommendation recorded" : "○ Video recommendation skipped"}</span><small>${state.recorded ? "Review your delivery for structure, pace, and eye contact." : "For maximum realism, record the close on your next attempt."}</small></div></article><article class="feedback-card coach"><p class="eyebrow">COACH'S TAKE</p><h2>${score >= 80 ? "You made the right call: test before buying." : "Make the logic visible, not just the arithmetic."}</h2><p>The best supported recommendation is to avoid an immediate acquisition: the IDR 120.8bn value is a ceiling, not a reason to pay it, and the national campaign has a <b>–IDR 0.4bn</b> risk-adjusted value. Pilot demand, close the 5m-bottle capacity gap, then revisit a negotiated bid.</p><div><b>Strong one-minute close:</b><span>“I recommend a pilot rather than acquiring BrewPack now. The deal has a financial ceiling of IDR 120.8bn, but BrewPack cannot fulfill 5m bottles in Year 1 and a national launch is slightly value-negative after marketing spend. Pilot in priority cities, validate demand and cannibalization, and negotiate only once capacity and economics are proven.”</span></div></article></section><section class="feedback-card answer-review"><div><h2>Question-by-question review</h2><p>Use this as your drill list—focus on the underlying setup, not only the final number.</p></div>${results.map((r, i) => `<details ${!r.correct ? "open" : ""}><summary><span class="result-icon ${r.correct ? "right" : "wrong"}">${r.correct ? "✓" : "!"}</span><b>${i + 1}. ${r.q.category}</b><em>${r.correct ? "Correct" : "Review"}</em><i>⌄</i></summary><div class="answer-detail"><p>${r.q.prompt}</p><div><span>Your answer</span><b>${formatAnswer(state.answers[r.q.id])}</b></div><div><span>Expected answer</span><b>${formatAnswer(r.q.answer)}</b></div>${r.correct ? "<small>Good. Carry this same explicit setup into the next question.</small>" : `<small>${explain(r.q.id)}</small>`}</div></details>`).join("")}</section></section>`);
  document.querySelector(".result-hero .eyebrow").textContent = `PRACTICE FEEDBACK · ${activeCase.title.toUpperCase()}`;
  document.querySelectorAll(".answer-review details").forEach((detail, index) => {
    const result = results[index];
    if (result.q.type !== "short") return;
    detail.querySelector("summary em").textContent = result.evaluation.correct ? "Complete" : `${result.evaluation.earnedPoints}/${result.q.points} pts`;
    const rubric = result.evaluation.criteria.map(criterion => `<span class="rubric-chip ${criterion.met ? "met" : "missed"}">${criterion.met ? "✓" : "+"} ${criterion.label}</span>`).join("");
    detail.querySelector(".answer-detail").innerHTML = `<p>${result.q.prompt}</p><div><span>Your response</span><b>${escapeHtml(state.answers[result.q.id])}</b></div><div><span>Rubric score</span><b>${result.evaluation.earnedPoints}/${result.q.points} points</b></div><div class="rubric-review"><span>Evidence review</span><section>${rubric}</section></div><div class="model-answer"><span>Model response</span><p>${result.q.modelAnswer}</p></div>`;
  });
  if (score >= 80) document.querySelector(".coach h2").textContent = activeCase.coachTitle;
  document.querySelector(".coach > p:not(.eyebrow)").textContent = activeCase.coachText;
  document.querySelector(".coach > div span").textContent = `“${activeCase.coachClose}”`;
  document.querySelector("#restart").textContent = "Try another case ↻";
  document.querySelector(".results").insertAdjacentHTML("beforeend", `<section class="video-rubric"><div><p class="eyebrow">VIDEO SELF-REVIEW</p><h2>Score your recommendation before you watch it back.</h2></div><label><input type="checkbox"> Answer first in the opening sentence</label><label><input type="checkbox"> Used two or three case facts</label><label><input type="checkbox"> Named one risk and concrete next step</label><label><input type="checkbox"> Finished inside one minute</label></section>`);
  document.querySelector("#restart").onclick = welcome;
}

function formatAnswer(answer) {
  if (answer === undefined) return "No answer submitted";
  if (Array.isArray(answer)) return answer.join(", ");
  return String(answer);
}

function explain(id) {
  if (activeCase.id === "healthaccess") return { datasets:"Access cases need demand, operational capacity, intervention feasibility, equity, and clinical-quality data together.",target:"500,000 × (80% − 60%) = 100,000 additional timely consultations.",portfolio:"Portfolio A delivers 45,000 + 35,000 + 20,000 = 100,000 consultations at IDR 53bn with no quality decline.",cost:"IDR 53bn ÷ 100,000 = IDR 530,000, or IDR 530.0 thousand, per consultation.",kpis:"Timely access, rural travel time, and clinical-quality follow-up jointly protect access and equity.",score:"100×45% + 90×30% + 90×15% + 70×10% = 91.0.",risks:"Connectivity exclusion, mobile-clinic staffing, and referral follow-up directly threaten equitable, safe access.",decision:"A staged pilot lets the network meet the access target while proving equity and quality safeguards." }[id];
  if (activeCase.id === "circularpack") return { datasets:"A circular-packaging decision needs materials, initiative performance, product quality, consumer behavior, and retailer logistics data.",target:"60m × 30g = 1,800 tonnes of virgin plastic; 25% reduction = 450 tonnes.",portfolio:"Portfolio A reduces 180 + 200 + 90 = 470 tonnes, costs IDR 75bn, retains shelf life, and has 65% collection coverage.",cost:"IDR 75bn ÷ 450 tonnes = IDR 166.7m per tonne.",kpis:"Verified material reduction, collection performance, and food-safety/shelf-life compliance protect the real circularity outcome.",score:"100×40% + 70×25% + 100×20% + 75×15% = 88.75, which rounds to 88.8—not 87.5." ,risks:"Recycled-resin quality, retailer reverse logistics, and consumer returns are the critical delivery risks.",decision:"Scale the proven material changes first; use explicit proof points before expanding returnable packaging." }[id];
  if (activeCase.id === "suryagrid") {
    const climateGuides = {
      datasets: "A climate target is only decision-useful when emissions, initiative economics, reliability, affordability, and delivery constraints are visible together.",
      target: "Required abatement = 2.40m tCO₂e × 35% = 0.84m tCO₂e.",
      portfolio: "Portfolio B abates 0.30 + 0.18 + 0.16 + 0.20 = 0.84m tCO₂e, costs IDR 145bn, has no net reliability decline, and creates a +0.6% tariff impact.",
      cost: "Portfolio B costs IDR 145bn for 0.84m tCO₂e, or IDR 172,619 per tCO₂e = IDR 172.6 thousand per tCO₂e.",
      kpis: "The core non-financial guardrails are emissions progress, service reliability, and affordability for vulnerable customers.",
      score: "Portfolio A's weighted score = 100×50% + 100×25% + 40×15% + 70×10% = 88.0.",
      risks: "Permitting and interconnection, demand-response participation, and replacement-capacity timing directly threaten the portfolio's delivery or reliability outcome.",
      decision: "The strongest answer is conditional: commit to the target and portfolio while gating execution against the reliability, affordability, and readiness constraints.",
    };
    return climateGuides[id];
  }
  if (activeCase.id === "anggunliving") {
    const marginGuides = {
      datasets: "The non-overlapping set is segment-level mix and margin, competitor pricing in the pressured segment, each lever's cost/timeline/risk, and segment price sensitivity. The rest is secondary or off-objective.",
      profit: "Operating profit = Revenue − operating costs = 230.0 − 195.5 = IDR 34.5bn.",
      mix: "Décor's revenue share rose from 20% to 40% while premium's fell from 45% to 25%; décor is the lowest-margin segment (6% vs 28% premium), so the mix shift pulled the blended margin down even as total revenue grew.",
      margin: "Blended Year 2 margin = 25%×28% + 35%×16% + 40%×6% = 7.0 + 5.6 + 2.4 = 15.0%.",
      recovery: "Re-pricing décor recovers IDR 3.5bn before cost; net of the IDR 0.5bn implementation cost, that is IDR 3.0bn — and it is the fastest lever at one month.",
      lever: "Only re-pricing décor clears all three bars: at least IDR 3.0bn net recovery, within 3 months, and not a high volume-loss risk. Discontinuing SKUs also nets IDR 3.0bn but takes 6 months and carries high risk; the other two levers fall short on profit recovery.",
      risks: "The risks specific to a décor price increase are customer price sensitivity beyond the assumed transition, competitor price-matching, and store readiness to execute the change on time.",
      decision: "Re-pricing décor is the evidence-led call: it is the only lever meeting the profit, timeline, and risk constraints simultaneously.",
    };
    return marginGuides[id];
  }
  if (activeCase.id === "voltaride") {
    const entryGuides = {
      datasets: "The non-overlapping set is market-sizing inputs, per-ride unit economics, fleet/capex/permit constraints, incumbent competitive data, and regulatory constraints. The rest is secondary or off-objective.",
      tam: "1,200,000 × 8% × 4 = 384,000 rides per month, or 384.0 thousand.",
      unit: "Contribution margin per ride = IDR 9,000 − 1,000 − 3,500 − 1,500 = IDR 3,000.",
      fleet: "Plan D matches the 1,920-ride-per-day target (1,200 scooters × 1.6 rides/scooter) within the 2,500-vehicle permit cap, at the lowest capex of the plans that clear the target; Plan C exceeds the permit cap and Plan B falls short of the target.",
      payback: "Monthly contribution = 57,600 rides × IDR 3,000 = IDR 172.8m; net of IDR 28.8m overhead = IDR 144.0m. Payback = IDR 3,600m ÷ IDR 144.0m = 25.0 months.",
      competition: "Incumbents already generate about 410,000 rides a month, more than the 384,000-ride addressable-market estimate — implying either a larger true market or that VoltaRide's target depends on taking share from incumbents.",
      risks: "Permit and licensing delays, utilization falling short of the 1.6 assumption, and incumbent competitive response are the risks specific to this entry decision.",
      decision: "Plan D is the evidence-led call: lowest capex, within the permit cap, and payback inside the CEO's 30-month bar — but it should stay conditional on a utilization pilot.",
    };
    return entryGuides[id];
  }
  if (activeCase.id === "javamart") {
    const responseGuides = {
      datasets: "The non-overlapping set is category price/volume/cost economics, the volume response to each candidate response, the competitor's overlap and promotional intensity, each response's cost and speed, and customer price sensitivity. The rest is secondary or off-objective.",
      gp: "Gross profit = (price − cost) × volume = (4,500 − 3,250) × 4.0m = IDR 5.0bn.",
      matchimpact: "At the matched price of IDR 4,050, margin per unit falls to IDR 800; at the same 4.0m volume, gross profit falls from IDR 5.0bn to IDR 3.2bn, a decline of IDR 1.8bn.",
      scenarios: "Differentiate clears IDR 4.6bn, ahead of Hold's IDR 4.4bn and Match's IDR 3.5bn — matching the full price cut destroys more gross profit than it protects, even after the assumed volume response.",
      gap: "IDR 4.6bn − IDR 3.5bn = IDR 1.1bn.",
      breakeven: "IDR 4.4bn ÷ IDR 800 per unit = 5.50m units — a 37.5% volume increase from the 4.0m baseline, just to equal what holding price alone delivers.",
      risks: "The risks specific to differentiating are uncertain loyalty-program take-up, a price cut too small to fully stop share loss, and supplier resistance to funding the bundle.",
      decision: "Differentiate is the evidence-led call: it clears the highest gross profit of the three responses, and matching in full is a worse outcome than simply holding price.",
    };
    return responseGuides[id];
  }
  if (activeCase.id === "nadiarmobile") {
    const pricingGuides = {
      datasets: "The non-overlapping set is demand/cost economics for the new tier, share trends, the cost inputs needed to support it, churn sensitivity, and competitor pricing. The rest is secondary or off-objective.",
      revmax: "Revenue = price × subscribers; the table peaks at IDR 25,000, where 50,000 subscribers × IDR 25,000 = IDR 1,250m.",
      pricepoint: "IDR 30,000 yields IDR 800m of profit, the highest in the table, even though IDR 25,000 generates more revenue (IDR 1,250m vs IDR 1,200m) — profit and revenue peak at different prices because cost per subscriber is positive.",
      share: "25% − 20% = 5.0 percentage points.",
      shareinsight: "Nadiar gained 5 percentage points (20%→25%) versus Competitor Z's 4 points (10%→14%), but in relative terms Competitor Z grew 40% (4/10) versus Nadiar's 25% (5/20) — the two metrics disagree on who is gaining faster.",
      cost: "IDR 180m/quarter × 4 = IDR 720m/year; plus IDR 960m/year; plus IDR 40m/month × 12 = IDR 480m/year. Total = 720 + 960 + 480 = IDR 2,160m.",
      risks: "The risks specific to this launch are price-driven churn, network costs exceeding the cost-exhibit assumptions, and Competitor Z's faster relative share growth.",
      decision: "IDR 30,000 is the evidence-led price: it maximizes profit, not just revenue, and the resulting profit comfortably covers the IDR 2,160m annual cost.",
    };
    return pricingGuides[id];
  }
  if (activeCase.id === "bumibite") {
    const bumiGuides = {
      datasets: "The non-overlapping set is demand and price, unit costs, capacity, standalone economics, and the external co-packing baseline. The other datasets are secondary or off-objective.",
      profit: "Operating profit = revenue − operating costs = 184.0 − 153.6 = IDR 30.4bn.",
      synergy: "Saving = 12.0m packs × (IDR 3,900 − IDR 3,300) = IDR 7.2bn.",
      capacity: "18m maximum capacity minus 8m contractual third-party volume leaves 10m spare capacity. BumiBite needs 12m, leaving a 2m-pack gap.",
      valuation: "Year-1 savings are 10m × IDR 600 = IDR 6.0bn. Annual profit impact is 5.5 + 6.0 = IDR 11.5bn; at 8×, that is IDR 92.0bn.",
      ev: "Expected operating profit is (40% × 18) + (40% × 6) + (20% × −5) = IDR 8.6bn. Less IDR 9bn launch cost gives −IDR 0.4bn.",
      risks: "Prioritize decision-specific risks: e-commerce bundle cannibalization, food safety/brand quality, and protein-powder or packaging-input volatility.",
      decision: "The launch has a slightly negative risk-adjusted value and capacity cannot cover Year-1 demand. A pilot supplies the missing evidence before a binding bid.",
    };
    return bumiGuides[id];
  }
  const guides = {
    datasets: "The key is a non-overlapping set: demand and price, unit costs, capacity, standalone economics, and the external cost baseline. The remaining datasets are secondary or off-objective.",
    profit: "Operating profit = Revenue − operating costs = 230.0 − 194.8 = IDR 35.2bn.",
    synergy: "Saving = 14.0m bottles × (IDR 4,800 − IDR 3,900) = IDR 12.6bn.",
    capacity: "20m maximum capacity minus 11m contractual third-party volume leaves 9m spare capacity. NusaSip needs 14m, leaving a 5m-bottle gap.",
    valuation: "Year-1 savings are 9m × IDR 900 = IDR 8.1bn. Annual profit impact is 7.0 + 8.1 = IDR 15.1bn; at 8×, that is IDR 120.8bn.",
    ev: "Expected operating profit is (50% × 20) + (30% × 8) + (20% × −4) = IDR 11.6bn. Less IDR 12bn campaign cost gives −IDR 0.4bn.",
    risks: "Prioritize decision-specific risks: café cannibalization, food safety/brand quality, and packaging-input volatility.",
    decision: "The national launch has a slightly negative risk-adjusted value, and capacity cannot meet Year-1 demand. A pilot supplies the missing evidence before a binding bid.",
  };
  return guides[id];
}

validateCaseLibrary();
if (new URLSearchParams(location.search).get("view") === "recruiter") {
  recruiterView();
} else {
  welcome();
}
