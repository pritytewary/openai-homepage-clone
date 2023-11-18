export default function OpenAIAfterHead() {
  return (
    <div>
      <Content />
      <Update />
      <Picture />
      <Safety />
      <Research />
    </div>
  );
}

function Content() {
  const data = [
    {
      longText: "Pioneering research on the path to AGI",
      shortText: "Learn about our Research",
    },
    {
      longText: "Transforming work and creativity with AI",
      shortText: "Explore our products",
    },
    {
      longText: "Join us in shaping the future of Technology",
      shortText: "View Careers",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex justify-between px-4 text-2xl py-5 font-medium bg-black text-white">
        {data.map((d) => {
          return (
            <div key={d.longText} className="w-1/3 px-4">
              <h4>{d.longText}</h4>
              <p className="text-sm underline mt-1">{d.shortText}</p>
            </div>
          );
        })}
      </div>

      <hr className="text-white" />
    </div>
  );
}

function Update() {
  return (
    <div className="flex justify-between px-6 text-white bg-black pt-6 pb-8">
      <p className="text-5xl font-medium text-mono ">Latest update</p>
      <p className="underline">View all updates</p>
    </div>
  );
}

function Picture() {
  const data = [
    {
      imageUrl:
        "https://images.openai.com/blob/9c95036b-c2f5-4af8-a9c4-ed6c411f77e4/chatgpt-can-now-see-hear-and-speak-alt.jpg?trim=0,420,0,420&width=800",
      text: "ChatGPT can now see, hear and speak",
      date: "Sep 25, 2023",
    },
    {
      imageUrl:
        "https://images.openai.com/blob/b196df3a-6fea-4d86-87b2-f9bb50be64c7/leaf.png?trim=0,0,0,0&width=800",
      text: "Open AI Red Teaming Network",
      date: "Sep 19, 2023",
    },
    {
      imageUrl:
        "https://images.openai.com/blob/5334a8a6-515d-4698-92f1-5266c3076ca0/announcing-openai-devday.png?trim=0,0,0,0&width=800",
      text: "Join us for OpenAI first devoloper conference of November 6 in San Francisco",
      date: "Sep 6, 2023",
    },
    {
      imageUrl:
        "https://images.openai.com/blob/71c1edf1-06f2-415c-826b-364f72fa74c1/red-teaming-network.png?trim=0,0,0,0&width=800",
      text: "Join us for OpenAI first devoloper conference of November 6 in San Francisco",
      date: "Sep 6, 2023",
    },
  ];

  return (
    <div>
      <div className="bg-black text-white flex gap-6 px-6 pb-24">
        {data.map((item, index) => {
          return (
            <div className="flex flex-col " key={index}>
              <img
                src={item.imageUrl}
                alt="ChatGPT can now see, hear and speak"
              />
              <p>{item.text}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
      <hr className="text-white" />
    </div>
  );
}

function Safety() {
  return (
    <div>
      <div>
        <div className=" bg-black flex gap-80  text-white pl-4 pb-28 pt-12">
          <div>
            <p className="text-5xl">Safety & responsibility</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl pb-6">
              Our work to create safe and beneficial AI requires a deep <br />
              understanding of the potential risks and benefits, as well as{" "}
              <br /> careful consideration of the impact.
            </p>
            <p className="underline">Learn about Safety</p>
          </div>
        </div>
        <img
          src="https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=2000"
          alt=""
        />
      </div>
    </div>
  );
}

function Research() {
  return (
    <div
      className=" bg-black flex justify-between
        text-white pl-4 pb-28 pr-4"
    >
      <div>
        <p className="text-5xl">Research</p>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl pb-6">
          We research generative models and how to align them with <br /> human
          values.
        </p>
        <p className="underline">Learn about our Research</p>
      </div>
    </div>
  );
}
