import PropTypes from "prop-types";
import { useEffect } from "react";

const CustomTextSection = ({ data, searchedTerm, setTotalPostFound }) => {

  const highlightText = (text, highlight) => {
    if (!highlight || !text.toLowerCase().includes(highlight.toLowerCase()))
      return text;
    const startIndex = text.toLowerCase().indexOf(highlight.toLowerCase());
    const endIndex = startIndex + highlight.length;
    const beforeMatch = text.slice(0, startIndex);
    const match = text.slice(startIndex, endIndex);
    const afterMatch = text.slice(endIndex);

    return (
      <>
        {beforeMatch}
        <span style={{ backgroundColor: "yellow" }}>{match}</span>
        {afterMatch}
      </>
    );
  };

  useEffect(() => {
    if (searchedTerm) {
      let count = 0;
      data?.forEach((item) => {
        if (
          item?.articleHeader
            ?.toLowerCase()
            .includes(searchedTerm.toLowerCase())
        )
          count++;
      });
      setTotalPostFound(count);
    } else setTotalPostFound(0);
  }, [data, searchedTerm, setTotalPostFound]);

  return (
    <section>
      {data?.map((item, index) => (
        <div key={item?.articleHeader + index}>
          <h2>{highlightText(item?.articleHeader, searchedTerm)}</h2>
          <i>{highlightText(item?.articleDate, searchedTerm)}</i>
          <p>{highlightText(item?.articleBody, searchedTerm)}</p>
        </div>
      ))}
    </section>
  );
};

CustomTextSection.propTypes = {
  data: PropTypes.array,
  searchedTerm: PropTypes.string,
  setTotalPostFound: PropTypes.func,
};
export default CustomTextSection;
