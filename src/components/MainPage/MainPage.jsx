import AppShow from "../AppShow/AppShow";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function MainPage() {
  return (
    <section className="bg-[url('img/bg-desktop.jpg')] h-screen bg-cover">
      <Header />
      <div className="flex flex-row">
        <NavBar />
        <AppShow />
      </div>
    </section>
  );
}

export default MainPage;
