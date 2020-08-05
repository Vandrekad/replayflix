/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFiled';
import useForm from '../../../hooks/useForm';
// Url que iremos usar
const requestURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://replayflix.herokuapp.com/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#20232a',
  };

  const [methodControl, setMethodControl] = useState(false);

  const {
    handleChange, values, setValues, clearForm,
  } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const newObject = {
    titulo: values.titulo,
    descricao: values.descricao,
    cor: values.cor,
  };

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://replayflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (serverAnswer) => {
        const answer = await serverAnswer.json();
        setCategorias([
          ...answer,
        ]);
      });
  }, []);

  function renderCat() {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://replayflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (serverAnswer) => {
        const answer = await serverAnswer.json();
        setCategorias([
          ...answer,
        ]);
      });
  }

  function createCategory(objt) {
    fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objt),
    })
      .then(() => {
        console.log('COnseguiu');
      });
  }

  function EditCategory(categoriaId) {
    fetch(`${requestURL}/${categoriaId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newObject),
    })
      .then(() => {
        console.log('COnseguiu');
        setMethodControl(false);
        renderCat();
        clearForm();
      });
  }

  function DeleteCategory(categoriaId) {
    fetch(`${requestURL}/${categoriaId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(() => {
        console.log('COnseguiu');
        renderCat();
      });
  }

  return (
    <>
      <PageDefault>
        <h1 style={{ marginLeft: 20 }}>Cadastro de Categoria: </h1>

        <div style={{
          flexDirection: window.innerWidth < 500 ? 'column' : 'row', display: 'flex', width: '100%',
        }}
        >
          <div style={{ width: window.innerWidth < 500 ? '100%' : '50%', flexDirection: 'column' }}>
            <div style={{ width: '80%', margin: 'auto' }}>
              <form
                style={{
                  marginBottom: 20,
                }}
                onSubmit={function handleSubmit(infoDoEvento) {
                  infoDoEvento.preventDefault();
                  setCategorias([
                    ...categorias,
                    values,
                  ]);

                  createCategory(newObject);

                  clearForm();
                }}
              >
                <FormField
                  placeholder="Categoria"
                  type="text"
                  name="titulo"
                  required
                  value={values.titulo}
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

                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: window.innerWidth < 500 ? 'center' : 'left' }}>
                  {methodControl
                    ? (
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ borderRadius: 15 }}
                        onClick={() => {
                          EditCategory(values.id);
                        }}
                      >
                        Editar
                      </Button>
                    )
                    : (
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ borderRadius: 15 }}
                        type="submit"
                      >
                        Cadastrar
                      </Button>
                    )}
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ borderRadius: 15, marginLeft: 10 }}
                    onClick={() => {
                      clearForm(valoresIniciais);
                      setMethodControl(false);
                    }}
                  >
                    Limpar
                  </Button>
                </div>
              </form>
            </div>

            {
              window.innerWidth < 500 && (
              <div style={{ alignSelf: 'center', margin: 30, justifyContent: 'center' }}>
                <span style={{
                  borderRadius: 5, background: values.cor, padding: 10, width: 'auto',
                }}
                >
                  {values.titulo}
                </span>
              </div>
              )
            }

            {categorias.length === 0 && (
            <div>
              loading...
            </div>
            )}

            {window.innerWidth > 500 && (
              <ul>
                {categorias.map((categoria, indice) => (
                  <li
                    key={`${categoria.nome}${indice}`}
                    style={{
                      flexDirection: 'row', display: 'flex', lineHeight: 1.5, marginBottom: 10, alignItems: 'center',
                    }}
                  >
                    <span style={{ background: categoria.cor, padding: 4, borderRadius: 5 }}>
                      {categoria.titulo}
                    </span>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 30, marginLeft: 10, padding: 0, height: 30,
                      }}
                      onClick={() => {
                        setMethodControl(true);
                        setValues({
                          titulo: categoria.titulo,
                          descricao: categoria.descricao,
                          cor: categoria.cor,
                          id: categoria.id,
                        });
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{
                        borderRadius: 30, marginLeft: 10, padding: 0, height: 30,
                      }}
                      onClick={() => {
                        DeleteCategory(categoria.id);
                      }}
                    >
                      X
                    </Button>
                  </li>
                ))}
              </ul>
            )}

          </div>

          {
            window.innerWidth > 500 && (
              <div style={{ width: window.innerWidth < 500 ? '100%' : '50%', alignSelf: 'center' }}>
                <h1 style={{
                  borderRadius: 5, margin: 20, background: values.cor, padding: 10, width: 'auto',
                }}
                >
                  {values.titulo}
                </h1>
              </div>
            )
          }
        </div>

        <div style={{ margin: 20 }}>
          <Link to="/">
            Ir para Home
          </Link>
        </div>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
