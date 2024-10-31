import CustomTextSection from "../../components/CustomComponentSections/CustomTextSection";
import CustomInput from "../../components/CustomInput";
import useSearchHighlights from "./hooks";

const SearchHighlight = () => {
  const { data, searchTerm, totalPostFound, setSearchTerm, setTotalPostFound } =
    useSearchHighlights();
  return (
    <section>
      <h1>Search</h1>
      <CustomInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "30%" }}
      />
      {totalPostFound > 0 ? (
        <span>
          <b>{totalPostFound} posts</b> were found.
        </span>
      ) : (
        <span>
          {" "}
          <b> Nothing found.</b>
        </span>
      )}
      <CustomTextSection
        data={data}
        searchedTerm={searchTerm}
        setTotalPostFound={setTotalPostFound}
      />
    </section>
  );
};

export default SearchHighlight;
