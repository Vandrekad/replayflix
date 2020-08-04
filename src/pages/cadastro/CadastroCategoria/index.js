/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFiled';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#20232a',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(informacoesInput) {
    setValue(
      informacoesInput.target.getAttribute('name'),
      informacoesInput.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

    fetch(URL)
      .then(async (serverAnswer) => {
        const answer = await serverAnswer.json();
        setCategorias([
          ...answer,
        ]);
      });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>Cadastro de Categoria: </h1>

        <div style={{
          flexDirection: 'row', display: 'flex', flex: 1,
        }}
        >
          <div style={{ width: '50%' }}>
            <form
              style={{ flex: '1', marginBottom: 20 }}
              onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategorias([
                  ...categorias,
                  values,
                ]);

                setValues(valoresIniciais);
              }}
            >
              <FormField
                placeholder="Categoria"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
              />

              <FormField
                placeholder="Descrição"
                type="text"
                multline
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />

              <FormField
                placeholder="Cor"
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 15 }}
                type="submit"
              >
                Cadastrar
              </Button>
            </form>

            {categorias.length === 0 && (
            <div>
              loading...
            </div>
            )}

            <ul>
              {categorias.map((categoria, indice) => (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              ))}
            </ul>

          </div>

          <div style={{
            textAlign: 'center',
          }}
          >
            <h1 style={{
              borderRadius: 5, margin: 20, background: values.cor, padding: 20,
            }}
            >
              {values.nome}
            </h1>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <Link to="/">
            Ir para Home
          </Link>
        </div>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
