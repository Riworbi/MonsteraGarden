export type MonsteraCareTips = {
  title: string;
  sections: {
    heading: string;
    content: string[];
  }[];
};

export const monsteraCareArticle: MonsteraCareTips = {
  title: 'Common issues of taking care of Monstera plants',
  sections: [
    {
      heading: 'Overwatering',
      content: [
        'Monstera plants are sensitive to overwatering, which can lead to root rot. Ensure the soil dries out between waterings, and use a well-draining potting mix.',
      ],
    },
    {
      heading: 'Underwatering',
      content: [
        'On the flip side, insufficient watering can cause yellow leaves. Make sure the plant receives a consistent amount of water, especially during the growing season.',
      ],
    },
    {
      heading: 'Light Issues',
      content: [
        'Monstera plants prefer bright, indirect light. Too much direct sunlight can scorch the leaves, while too little light can cause yellowing due to insufficient photosynthesis.',
      ],
    },
    {
      heading: 'Nutrient Deficiency',
      content: [
        'A lack of essential nutrients, particularly nitrogen, can cause yellowing. Fertilize the plant with a balanced, water-soluble fertilizer during the growing season.',
      ],
    },
    {
      heading: 'Temperature Stress',
      content: [
        'Monstera plants thrive in temperatures between 65-85°F (18-29°C). Exposure to cold drafts or sudden temperature changes can cause stress and yellow leaves.',
      ],
    },
    {
      heading: 'Pests',
      content: [
        'Insects like spider mites, aphids, or scale can damage the plant, leading to yellow leaves. Inspect your plant regularly and treat any infestations promptly.',
      ],
    },
    {
      heading: 'Natural Aging',
      content: [
        'Older leaves naturally turn yellow and fall off as part of the plant’s life cycle. If only the oldest leaves are yellowing, it might be a normal process.',
      ],
    },
    {
      heading: 'Improper Pot Size',
      content: [
        ' If the plant is root-bound, it may not be getting enough nutrients and water. Repotting to a larger container can help alleviate this issue.',
      ],
    },
    {
      heading: 'Poor Drainage',
      content: [
        'If the pot lacks drainage holes or the soil retains too much moisture, this can lead to waterlogged roots, causing yellowing leaves.',
      ],
    },
  ],
};
