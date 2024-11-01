import React from "react";

const January = () => {
  const placesToVisit = [
    {
      name: "Srinagar",
      description:
        " Srinagar is the largest city in Kashmir and is known for its beautiful gardens, lakes, and houseboats. The main highlight of the city is the Dal Lake, which is the gem of the city ",
    },
    {
        name: "Gulmarg",
        description:
          "If you enjoy winter sports, head to Gulmarg in Kashmir for skiing and snowboarding.",
      },
      {
        name: "Sonamarg",
        description:
          "Sonamarg is known as the Land of Gold and is a perfect place for trekking and hiking. It is surrounded by snow-capped mountains and glaciers",
      },
      {
        name: "Pahalgam",
        description:
          " Pahalgam is known for its scenic beauty and is a perfect place for nature lovers. It is surrounded by lush green forests and is a popular spot for camping and trekking ",
      },
      {
        name: "Betaab Valley",
        description:
          "Betaab Valley is a beautiful valley located in Pahalgam. It is known for its stunning natural beauty and is a perfect place for trekking and hiking ",
      },
  ];

  return (
    <div>
      <h2>Best places to visit in January in India</h2>
      <ul>
        {placesToVisit.map((place) => (
          <li key={place.name}>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default January;
