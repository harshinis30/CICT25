const editorialData = [
    {
      title: "Wireless Communication Technologies",
      panel: [
        "Dr. K Krishna Naik IIITDM Kurnool",
        "Dr. Suneel Yadav IIIT-Allahabad",
        "Dr. Matadeen Bansal, IIITDM Gwalior",
        "Dr. Radhika Gour IIIT Allahabad",
        "Dr. Ranjan Hazra NIT Silchar",
        "Dr. Vinay Bake, NIT Rourkela",
        "More persons to be added soon",
      ],
    },
    {
      title: "Computational Intelligence & Machine Learning",
      panel: [
        "Dr. K P Singh, IIIT Allahabad",
        "Dr. Muneendra Ojha IIIT-Allahabad",
        "Dr. Naveen Saini IIIT-Allahabad",
        "Dr. Anjali IIITM Gwalior",
        "More persons to be added soon",
      ],
    },
    {
      title: "Cloud and Big Data Management",
      panel: [
        "Dr. Manish Kumar IIIT Allahabad",
        "Dr. Sanjeev B S",
        "Dr. K M Pooja IIIT-Allahabad",
        "More persons to be added soon",
      ],
    },
  ];
  
  export default function EditorialPanel() {
    return (
      <div className="m-3 max-w-full">
        <h1 className="text-5xl font-bold text-blue-900 m-6 ">
          Regular Tracks and Respective Editorial Panel
        </h1>
        <ul className="space-y-4 list-disc pl-6">
         {editorialData.map((item) => (
              <li key={item.title}> 
             <h2 className="text-lg font-bold">{item.title}</h2>
               <span className="text-gray-700">
                Editorial Panel: {item.panel.join("; ")}
                </span>
              </li>
          ))
          }

        </ul>
      </div>
    );
  }
  