import { useState } from "react";
import useAddSignature, { NewSign } from "../hooks/useAddSignature";

const NewSignForm = () => {
  const addSignature = useAddSignature(1);

  const [formData, setFormData] = useState<NewSign>({
    id: 0,
    name: "",
    id_number: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputNext = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setSubmitted(false);

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    if (!formData.name) {
      setError("Erro: Insira o teu primeiro e último nome.");

      return;
    } else if (!formData.id_number) {
      setError("Erro: Insira o teu número de bilhete de identidade.");
      return;
    }

    addSignature.mutate(formData);
    setSubmitted(true);
  };
  return (
    <form
      className="row g-4 border-2 border-top border-success"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center mt-1">Assinar</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {addSignature.isSuccess && submitted && (
        <div className="alert alert-success" role="alert">
          Parabéns! Tu assinaste a essa petição.
        </div>
      )}
      <div className="col-md-4  align-middle">
        <label htmlFor="name" className="form-label">
          Primeiro e último nome
        </label>
        <input
          type="text"
          onChange={inputNext}
          className="form-control"
          id="name"
        />
      </div>
      <div className="col-md-4  align-middle">
        <label htmlFor="id_number" className="form-label">
          Número de Bilhete
        </label>
        <input
          type="number"
          onChange={inputNext}
          className="form-control"
          id="id_number"
        />
      </div>
      <div className="col-md-4  align-middle">
        <label htmlFor="phone" className="form-label">
          Telemóvel <span className="text-secondary">(opcional)</span>
        </label>
        <input
          type="tel"
          onChange={inputNext}
          className="form-control"
          id="phone"
        />
      </div>
      <div className="col-12  align-middle">
        <button type="submit" className="btn btn-primary my-2">
          Assinar
        </button>
      </div>
    </form>
  );
};

export default NewSignForm;
