const mockData = {
  trips: [
    {
      id: "trip-1",
      title: "3 Days in Nairobi",
      days: [
        { day: 1, activities: ["Nairobi National Park morning safari", "Giraffe Centre visit"] },
        { day: 2, activities: ["Karen Blixen Museum", "Masai Market"] },
        { day: 3, activities: ["David Sheldrick Elephant orphanage", "Relax at hotel"] }
      ],
      budget: 450,
      dates: { start: "2025-11-10", end: "2025-11-13" }
    }
  ],
  destinations: [
    { id: "dst-1", title: "Nairobi", type: "City", summary: "Capital city with urban safaris and culture." },
    { id: "dst-2", title: "Masai Mara", type: "Safari", summary: "Famous wildlife reserve and great wildebeest migrations." },
    { id: "dst-3", title: "Mombasa", type: "Beach", summary: "Coastal beaches and Swahili culture." }
  ],
  animals: [
    { id: "a1", name: "Lion", info: "Best seen in early morning or late afternoon." },
    { id: "a2", name: "Elephant", info: "Large herds in conservancies and parks." }
  ]
};

export default mockData;
