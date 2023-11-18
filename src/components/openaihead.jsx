export default function OpenAIHead() {
  return (
    <div className="relative min-h-screen w-full">
      <video
        src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
        className="object-cover h-screen w-full"
        autoPlay
        loop
        muted
      /> 

      <div className="h-full w-full p-6 text-white flex flex-col absolute z-10 top-0 bg-black bg-opacity-25">
        <Header />
        <Content />
      </div>

      <button className="px-4 py-4 border text-white border-black bg-black hover:text-black hover:bg-white absolute z-20 bottom-5 right-5">
        pause video
      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-1 flex items-end justify-center pb-6">
      <div className="max-w-5xl">
        <h1 className="text-[65px] text-left leading-none">
          Creating safe AGI that benefits all of humanity
        </h1>

        <button className="px-2 py-1 border border-white hover:bg-white hover:text-black mt-10">
          Learn about OpenAI
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-center items-center">
        <img src="/test.svg" alt="OPENAI" className="w-28" />
        <HeaderLeftItems />
      </div>
      <div>
        <HeaderRightItems />
      </div>
    </div>
  );
}

function HeaderLeftItems() {
  const items = ["Research", "API", "ChatGPT", "Safety", "Comany"];
  return (
    <div className="flex items-center gap-8 ml-28">
      {items.map((item) => {
        return (
          <div className="text-lg" key={item}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

function HeaderRightItems() {
  const items = ["Search", "login"];
  return (
    <div className="flex items-center gap-8 ">
      {items.map((item) => {
        return (
          <div className="text-lg" key={item}>
            {item}
          </div>
        );
      })}

      <div className="flex justify-between">
        <button className="px-2 py-1 border border-white hover:bg-white hover:text-black">
          Try ChatGPT
        </button>
      </div>
    </div>
  );
}
