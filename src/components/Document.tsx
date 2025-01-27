import useDocument from "../hooks/useDocument";
import Letter from "./Letter";

const Document = () => {
  const { data } = useDocument(1);
  // console.log(data?.description);
  return (
    <>
      <h1 className="text-center my-2 fw-bold">{data?.title}</h1>
      <img
        src={
          data?.image ||
          "https://images.unsplash.com/photo-1736967439874-d0c856eacda1?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="img-fluid"
        alt="Petition Image"
        width={"100%"}
      />
      <div className="my-2">
        <Letter htmlString={data?.text || ""} />
      </div>
      <p className="text-white bg-success p-2 fw-bold rounded fs-3 text-center">
        <span className="text-warning">{data?.signs.length}</span> santomenses
        já assinaram!
      </p>
    </>
  );
};

export default Document;
