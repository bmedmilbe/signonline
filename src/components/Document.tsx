import useDocument from "../hooks/useDocument";
import Letter from "./Letter";

const Document = () => {
  const { data } = useDocument(1);
  // console.log(data?.description);
  return (
    <>
      <h1 className="text-center my-2 fw-bold fs-3">{data?.title}</h1>
      <p className="paragraph fw-bold text-center fst-italic">
        {data?.description}
      </p>
      <img
        src={"miquesbaner.png"}
        className="img-fluid"
        alt="Petition Image"
        width={"100%"}
      />
      <div className="my-2">
        <p className="paragraph fw-bold  text-center">
          {"=== INÍCIO DA PETIÇÃO ==="}
        </p>
        <p className="paragraph fw-bold  fst-italic">Assunto: {data?.title}</p>

        <Letter htmlString={data?.text || ""} />

        <p className="paragraph text-center">{"[assinaturas]"}</p>

        <p className="paragraph fw-bold  text-center">
          {"=== FINAL DA PETIÇÃO ==="}
        </p>
      </div>
      <p className="text-white bg-success p-2 fw-bold rounded fs-3 text-center">
        <span className="text-warning">{data?.signs.length}</span> santomenses
        já assinaram!
      </p>
    </>
  );
};

export default Document;
