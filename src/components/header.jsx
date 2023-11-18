export default function Header() {
  return (
    <div className="flex justify-between gap-8 py-8 px-6 mb-10">
      <div className="flex gap-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png"
          alt=""
          className="w-5 top-2 absolute py-7"
        />
        <h2 className="pl-8">Notion</h2>
        {options.map((item, index) => {
          return <h2 key={item}>{item}</h2>;
        })}
      </div>
      <div className="flex gap-8">
        <button className="rounded-md bg-white hover:bg-gray-400 px-4 py-2">
          Request a demo
        </button>
        <button className="rounded-md bg-white hover:bg-gray-400 px-4 py-2">
          Log in
        </button>
        <button className="bg-black hover:bg-gray-500 text-white rounded-lg flex-row px-4 py-2">
          Get Notion Free
        </button>
      </div>
    </div>
  );
}
const options = ["products", "Download", "Solutions"];
