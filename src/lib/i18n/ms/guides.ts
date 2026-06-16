export interface Guide {
  slug: string;
  title: string;
  description: string;
  region: "lombok" | "sumbawa" | "labuan-bajo" | "general";
  content: string;
  keyTakeaways: string[];
  bestFor: string[];
  relatedDestinations: string[];
  relatedPackages: string[];
  publishDate: string;
  readingTime: number;
}

export const guides: Guide[] = [
  {
    slug: "best-time-to-visit-lombok",
    title: "Best Time to Visit Lombok",
    description:
      "A complete guide to seasons, weather, and sea conditions for planning your trip to Lombok.",
    region: "lombok",
    content: `
# Best Time to Visit Lombok

Lombok has two main seasons that affect your travel experience. Choosing the right time will ensure you get the best weather and activities that suit your plans.

## Dry Season (April - October)

The dry season is the best time for most activities in Lombok. During this period, the weather is clear and the seas are calm, perfect for snorkeling, diving, and beaches. You will find:

- Clear weather with little rain
- Calm and clear seas for snorkeling
- Excellent diving visibility
- Beautiful and safe beaches for swimming
- Higher prices due to holiday season

The best months in the dry season are **July to September**, when the weather is most stable and waves on the southern coast are relatively small.

## Rainy Season (November - March)

The rainy season brings its own challenges but also advantages. This period is suitable for:

- Cheaper accommodation prices
- Greener natural landscapes
- A more relaxed atmosphere with fewer tourists
- Easier Rinjani trekking with more abundant water

However, you should be prepared for heavy afternoon showers and rough seas, especially on the southern coast.

## Specific Seasonal Times

### Peak Season (July - August)
School holidays make beaches and destinations crowded. Book accommodation well in advance and expect higher prices.

### Shoulder Season (March - April and September - October)
This time offers a perfect balance: the weather is still good, beaches are less crowded, and prices are more affordable.

## Planning Tips

1. If you love the sea and beaches, come from May to September
2. For Rinjani trekking in the best conditions, choose July to October
3. If budget is limited, consider November to February (avoid peak season)
4. For an authentic experience with fewer tourists, come in March or April
    `,
    keyTakeaways: [
      "Dry season (April-October) is the best time with clear weather",
      "July-September is peak season with the most stable weather and seas",
      "Rainy season (November-March) offers cheaper prices and greener nature",
      "Shoulder season (March-April, September-October) offers ideal balance",
    ],
    bestFor: [
      "Beach vacation planning",
      "Trekking and outdoor activities",
      "Snorkeling and diving",
      "Nature landscape photographers",
    ],
    relatedDestinations: [
      "kuta-lombok",
      "gili-trawangan",
      "rinjani",
      "sembalun",
    ],
    relatedPackages: [
      "3d2n-lombok-signature",
      "snorkeling-gili-escape",
    ],
    publishDate: "2024-01-15",
    readingTime: 8,
  },
  {
    slug: "choosing-daily-tour",
    title: "How to Choose the Right Daily Tour",
    description:
      "A guide to differentiating beach, cultural, and island exploration tours so you can choose a route that matches your travel pace.",
    region: "lombok",
    content: `
# How to Choose the Right Daily Tour

Daily tours are the best way to experience Lombok without a long-term commitment. However, with many options available, choosing the right tour requires understanding your travel style.

## Three Main Tour Categories

### 1. Beach Tours

Beach tours focus on the beauty of the sea and water activities. Ideal for:

- Snorkeling and diving
- Sunbathing and swimming
- Beach photography
- Relaxation

**Characteristics:**
- Duration: Usually half a day to a full day
- Pace: Slow and relaxed
- Physical: Light to moderate
- Suitable for: All ages and fitness levels

**Popular destinations:**
- Gili Islands (Trawangan, Air, Meno)
- Kuta Beach, Mawun Beach, Tangsi Beach

### 2. Cultural Tours

Cultural tours take you to explore local life, traditions, and Lombok's history. Ideal for:

- Meeting local people
- Seeing traditional handicrafts
- Understanding Sasak culture
- Authentic experiences

**Characteristics:**
- Duration: Half a day to a full day
- Pace: Varies, depending on interest
- Physical: Light to moderate (lots of walking)
- Suitable for: Travelers seeking cultural experiences

**Popular destinations:**
- Tetebatu Village
- Weaving Villages
- Traditional Markets

### 3. Nature Tours

Nature tours combine trekking, mountain scenery, and outdoor adventures. Ideal for:

- Trekking and hiking
- Sunrise from the heights
- Nature photography
- Active adventures

**Characteristics:**
- Duration: Half a day to multi-day
- Pace: Fast and demanding
- Physical: Moderate to high
- Suitable for: People with good fitness

**Popular destinations:**
- Mount Rinjani
- Sembalun Highland
- Tiu Kelep Waterfall

## Choosing a Tour Based on Your Style

| Travel Style | Recommendation | Reason |
|---|---|---|
| Total Relaxation | Beach Tour | Slow pace and light activities |
| Moderate Adventurer | Beach + Culture Combo | Balance between relaxation and exploration |
| Experience Seeker | Cultural Tour | Authentic interaction with locals |
| Active Adventurer | Nature Tour | Challenge and natural beauty |
| All-Rounder | Multi-tour (combo of three categories) | Comprehensive Lombok experience |

## Tips for Choosing

1. **Consider Your Fitness**: If you are not used to long walks, choose a beach tour
2. **Watch the Duration**: Half-day tours are good if you want to relax; full-day for a deeper experience
3. **Ask About Group Size**: Small groups are more personal; large groups are more social
4. **Inquire About Accommodation**: Tours with hotel transfer are more convenient
5. **Check Specific Activities**: Make sure the tour includes activities you really want
    `,
    keyTakeaways: [
      "There are three main categories: Beach, Cultural, and Nature",
      "Choose based on your travel style and fitness",
      "Beach tours are good for relaxation; nature tours for adventure",
      "Combining several tours gives a complete Lombok experience",
    ],
    bestFor: [
      "First-time visitors to Lombok",
      "Choosing the right activities",
      "Daily tour planning",
      "Travelers with various travel styles",
    ],
    relatedDestinations: [
      "kuta-lombok",
      "tetebatu",
      "rinjani",
      "gili-trawangan",
    ],
    relatedPackages: [
      "3d2n-lombok-signature",
      "village-culture-experience",
      "snorkeling-gili-escape",
    ],
    publishDate: "2024-02-10",
    readingTime: 10,
  },
  {
    slug: "efficient-local-transportation",
    title: "Most Efficient Local Transportation",
    description:
      "A guide to choosing between local driver, rental driver, or a combination of airport transfer and private car for an efficient journey.",
    region: "lombok",
    content: `
# Most Efficient Local Transportation

Transportation is key to a smooth travel experience. Lombok has several transportation options, and choosing the right one will save time, money, and stress.

## Main Transportation Options

### 1. Private Driver

A private driver is someone who takes you to destinations on your own schedule.

**Advantages:**
- Full flexibility over schedule
- Personal experience with a local guide
- Can stop anytime for photos or breaks
- Comfortable for families or small groups

**Price:** Rp 600,000 - 900,000 per day (depending on vehicle type)

**Ideal for:**
- Family or friend groups
- Flexible travel
- Travelers wanting a slow pace

### 2. Airport Transfer

Airport transfer is a pickup and drop-off service from the airport to the hotel (or vice versa).

**Advantages:**
- Affordable price
- No need to worry about transportation upon arrival
- Driver knows the best routes
- Can be combined with other services

**Price:** Rp 150,000 - 250,000 per way

**Ideal for:**
- First-time travelers
- Simple airport-hotel transfer
- Limited budget

### 3. Car Rental

Car rental allows you to drive yourself with full flexibility.

**Advantages:**
- Full freedom to explore
- More economical for long trips
- Not dependent on others' schedules
- More autonomous adventure

**Price:** Rp 400,000 - 700,000 per day

**Considerations:**
- You must be comfortable driving in Lombok
- Local roads can be challenging
- Parking can be an issue at some destinations

**Ideal for:**
- Experienced and confident travelers
- Cross-destination travel
- Those who enjoy full freedom

## Optimal Combinations

Many travelers find that a combination is the best solution:

**Model A: Transfer + Daily Driver**
- Day 1: Airport transfer to hotel
- Day 2-3: Private driver for tours
- Day 4: Hotel transfer to airport

**Model B: Transfer + Car Rental**
- Day 1: Airport transfer to hotel
- Day 2-3: Car rental for independent exploration
- Day 4: Hotel transfer to airport
- Suitable for confident and independent travelers

**Model C: Complete Package with Driver**
- All transportation included in the tour package
- Ideal if you want everything arranged

## Quick Comparison

| Option | Budget | Flexibility | Comfort | Ideal For |
|---|---|---|---|---|
| Private Driver | Medium | High | High | Families, groups |
| Airport Transfer | Low | Low | Medium | Simple transfers |
| Car Rental | Medium | Very High | Medium | Independent adventurers |
| Combination | Medium | High | High | Most travelers |

## Efficient Transportation Tips

1. **Book in Advance**: Drivers and transfers should be booked at least 24 hours in advance
2. **Ask About Price**: Negotiate prices for multi-day travel
3. **Verify Vehicle Quality**: Make sure the vehicle is in good condition
4. **Clear Communication**: Explain routes and preferences in detail
5. **Tip for Good Service**: Local drivers appreciate appreciation
    `,
    keyTakeaways: [
      "There are three main options: Private Driver, Transfer, and Car Rental",
      "Combining transfer + daily driver is the optimal solution for many travelers",
      "Private driver gives full flexibility and local experience",
      "Car rental is suitable for independent and confident drivers",
    ],
    bestFor: [
      "Transportation planning",
      "Budget planning",
      "First-time travelers",
      "Families and groups",
    ],
    relatedDestinations: [
      "kuta-lombok",
      "tetebatu",
      "rinjani",
    ],
    relatedPackages: [
      "3d2n-lombok-signature",
    ],
    publishDate: "2024-02-20",
    readingTime: 9,
  },
];
