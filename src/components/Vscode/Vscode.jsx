import HeaderApp from "../Header/HeaderApp";

function Vscode() {
  const iframeSource =
    '<iframe className="w-full h-full" src="https://vscode.dev/" frameborder="0"></iframe>';
  return (
    <div className="w-full h-screen -mt-10 pt-8 bg-slate-800">
      <div className="w-full bg-slate-900">
        <HeaderApp name="vscode" />
      </div>
      <div
        className="h-full"
        dangerouslySetInnerHTML={{ __html: iframeSource }}
      ></div>
    </div>
  );
}

export default Vscode;
