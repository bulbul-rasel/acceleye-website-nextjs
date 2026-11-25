// FAQ content, adapted from acceleye.com/faq. Edit answers here.

export type FaqItem = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        q: "Why AccelEye?",
        a: "AccelEye is a leading solution for gun violence and active-shooter threats in schools and public settings. It analyzes security camera feeds for early gun and active-shooter detection, human verification, automated mass communication and rapid response.",
      },
      {
        q: "Why SaveAlert?",
        a: "A single tap notifies administrators, security staff and a 24/7 monitoring and verification center with the crisis type, a photo and the exact GPS location. It runs on cloud technology with 99.99% uptime, keeps working during power or internet outages, and is compatible with Android and iPhone over WiFi or mobile data.",
      },
      {
        q: "How fast is AccelEye?",
        a: "AccelEye can detect threats in as little as 90 milliseconds, using optimized AI models and edge computing to analyze hundreds of camera feeds at once. It works through the AI Box or through integrations with VMS platforms such as Milestone, ALTA and AxxonSoft.",
      },
      {
        q: "How accurate is AccelEye?",
        a: "Weapon detection is 92% accurate with a 90-millisecond response time. Violence detection is 64% accurate, and fall detection is 85% accurate.",
      },
      {
        q: "Does AccelEye work without an AI Box, and with third-party VMS?",
        a: "Yes. AccelEye integrates with existing VMS platforms such as ALTA, AxxonSoft and Milestone, so it runs through that infrastructure without extra hardware.",
      },
    ],
  },
  {
    id: "weapon",
    title: "Weapon detection",
    items: [
      {
        q: "Why is weapon detection needed?",
        a: "It helps prevent violence before it escalates by identifying firearms and other dangerous weapons in real time, so security teams can respond quickly in schools, public spaces, workplaces and other vulnerable locations.",
      },
      {
        q: "Why is weapon detection needed on school campuses?",
        a: "Automated alerts when a gun is visible buy time for lockdowns, law-enforcement response and evacuation. It can also deter attackers, reduce reliance on human vigilance alone, and reassure parents, staff and students.",
      },
      {
        q: "Where can weapon detection be used?",
        a: "Schools, malls, airports, offices, public venues and other places where proactive security matters.",
      },
      {
        q: "How does the weapon detection system work?",
        a: "It uses real-time video analysis to spot visible firearms or weapons on security cameras and immediately alerts security teams.",
      },
    ],
  },
  {
    id: "violence",
    title: "Violence detection",
    items: [
      {
        q: "Why is violence detection needed?",
        a: "Violent incidents can escalate quickly and go unnoticed in crowded or high-risk places like schools, hospitals and workplaces. Real-time monitoring lets teams act fast, reducing injuries and improving response times.",
      },
      {
        q: "How does violence detection work?",
        a: "AI analyzes movement, body language and interactions in live video to identify aggression such as fighting, hitting or sudden altercations. It separates normal activity from potential violence and sends alerts to security or emergency responders.",
      },
      {
        q: "How accurate is violence detection?",
        a: "The system uses deep-learning models for high accuracy and can be fine-tuned for each environment.",
      },
      {
        q: "What types of violations can the system detect?",
        a: "Loitering, unauthorized access, crowd fights, vandalism and other suspicious or non-compliant behavior.",
      },
    ],
  },
  {
    id: "fall",
    title: "Fall detection",
    items: [
      {
        q: "What is fall detection and how does it work?",
        a: "AI video analytics identify sudden body movements that indicate a fall and automatically trigger alerts for rapid response.",
      },
      {
        q: "Who benefits most from fall detection?",
        a: "Elderly people, people with disabilities, hospital patients and people in high-risk settings such as public buildings or schools.",
      },
      {
        q: "Why is fall detection needed in public places?",
        a: "It ensures quick help after accidents or medical emergencies, can reduce injury severity, speeds up emergency response, and can flag health-related incidents or violence in crowds.",
      },
      {
        q: "Is it suitable for indoor and outdoor use?",
        a: "Yes. It works in offices, campuses, parks and transit hubs.",
      },
      {
        q: "Can it detect falls in crowded areas?",
        a: "Yes. It tracks individual movement patterns and posture changes even in busy environments.",
      },
      {
        q: "Is detection real-time?",
        a: "Yes. Alerts reach designated personnel within seconds.",
      },
      {
        q: "Does it require wearable devices?",
        a: "No. It is entirely camera-based.",
      },
      {
        q: "Does it integrate with existing security systems?",
        a: "Yes. It works with most VMS and camera systems.",
      },
    ],
  },
];
