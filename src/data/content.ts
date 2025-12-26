export type ImpactMetric = {
  id: string;
  icon: string;
  stat: string;
  detail: string;
  partner: {
    name: string;
    logo: string;
    href: string;
  };
};

export type CharityPartner = {
  name: string;
  summary: string;
  focusArea: string;
  href: string;
  location: string;
  logo: string;
};

export type LetterSigner = {
  name: string;
  avatar: string;
};

export type FarewellLetter = {
  intro: string;
  paragraphs: string[];
  closing: string;
  signers: LetterSigner[];
};

export const impactMetrics: ImpactMetric[] = [
  {
    id: "vaccinations",
    icon: "/images/icons/vac.png",
    stat: "533 children",
    detail: "enrolled in vaccination programs",
    partner: {
      name: "New Incentives",
      logo: "/images/partners/new incentives.png",
      href: "https://www.newincentives.org",
    },
  },
  {
    id: "malaria-meds",
    icon: "/images/icons/malaria.png",
    stat: "990 children",
    detail: "given preventive malaria medicine",
    partner: {
      name: "Malaria Consortium",
      logo: "/images/partners/malaria-consortium.png",
      href: "https://www.malariaconsortium.org",
    },
  },
  {
    id: "mosquito-nets",
    icon: "/images/icons/mosquito nets.png",
    stat: "3,469 people",
    detail: "given mosquito nets",
    partner: {
      name: "Against Malaria Foundation",
      logo: "/images/partners/against malaria.png",
      href: "https://www.againstmalaria.com",
    },
  },
  {
    id: "vitamin-a",
    icon: "/images/icons/vitamin-a.png",
    stat: "4,674 children",
    detail: "covered with vitamin A supplements",
    partner: {
      name: "Helen Keller International",
      logo: "/images/partners/helenkeller.png",
      href: "https://www.hki.org",
    },
  },
  {
    id: "safe-water",
    icon: "/images/icons/drinking water.png",
    stat: "3,858 people",
    detail: "given access to safe drinking water",
    partner: {
      name: "Evidence Action",
      logo: "/images/partners/evidence-action.png",
      href: "https://www.evidenceaction.org",
    },
  },
  {
    id: "sanitation",
    icon: "/images/icons/water.png",
    stat: "1,178 people",
    detail: "given access to water or sanitation",
    partner: {
      name: "Water.org",
      logo: "/images/partners/waterorg.png",
      href: "https://water.org",
    },
  },
];

export const charityPartners: CharityPartner[] = [
  {
    name: "New Incentives",
    summary:
      "Increasing vaccination rates and improving child health outcomes.",
    focusArea: "Vaccination access",
    href: "https://www.newincentives.org",
    location: "Nigeria",
    logo: "/images/partners/new incentives.png",
  },
  {
    name: "Malaria Consortium",
    summary:
      "Prevention, control, and treatment of malaria and other communicable diseases.",
    focusArea: "Malaria control",
    href: "https://www.malariaconsortium.org",
    location: "Africa & Asia",
    logo: "/images/partners/malaria-consortium.png",
  },
  {
    name: "Against Malaria Foundation",
    summary:
      "Providing long-lasting insecticidal nets to protect families from malaria.",
    focusArea: "Malaria prevention",
    href: "https://www.againstmalaria.com",
    location: "Sub-Saharan Africa",
    logo: "/images/partners/against malaria.png",
  },
  {
    name: "Helen Keller International",
    summary:
      "Combating preventable blindness, malnutrition, and poor health with vitamin supplements and more.",
    focusArea: "Health & nutrition",
    href: "https://www.hki.org",
    location: "Global",
    logo: "/images/partners/helenkeller.png",
  },
  {
    name: "Evidence Action",
    summary:
      "Access to clean water to millions of people using water treatment interventions.",
    focusArea: "Evidence-based programs",
    href: "https://www.evidenceaction.org",
    location: "Global",
    logo: "/images/partners/evidence-action.png",
  },
  {
    name: "Water.org",
    summary:
      "Getting people access to safe water and sanitation through affordable financing.",
    focusArea: "Safe water",
    href: "https://water.org",
    location: "Global",
    logo: "/images/partners/waterorg.png",
  },
];

export const farewellLetter: FarewellLetter = {
  intro:
    "To everyone who ever donated, shared a link, or simply believed in the Do Good Movement - thank you. ❤️",
  paragraphs: [
    "Over the past few years this community experimented with a hopeful idea: ordinary people pooling resources to make extraordinary, measurable change. Together we learned how to show impact transparently, how to move quickly when disasters struck, and how to keep people at the center of every decision.",
    "As we wind things down, we feel deep pride in the projects you propelled forward. Clean water points continue to flow, vaccination drives are run by local partners, and community health workers are still equipped to act fast because of your generosity.",
    "We are sharing this final note so future donors can see where to pick up the baton and so every supporter has space to reflect on what we built side by side.",
  ],
  closing: "Take care, stay safe, do good.",
  signers: [
    {
      name: "Jacob Steinitz",
      avatar: "/images/avatars/jacob.png",
    },
    {
      name: "David Bograd",
      avatar: "/images/avatars/david.JPG",
    },
    {
      name: "Lasse Andersen",
      avatar: "/images/avatars/lasse.png",
    },
  ],
};

