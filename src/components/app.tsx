import Header from "./header";
import ContentList from "./contest-list";

const App = ({ initialData }) => {
  console.log(initialData);
  return (
    <div className="container">
      
      <Header message="Title of Contests" />

      <ContentList iniitialContests={initialData.contests} />
    </div>
  );
};

export default App;
