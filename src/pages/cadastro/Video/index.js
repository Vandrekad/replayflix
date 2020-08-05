import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Button, Select, MenuItem, FormControl, InputLabel,
} from '@material-ui/core';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFiled';
import useForm from '../../../hooks/useForm';
import videosRepositories from '../../../repositories/videos';
import categorieRepositories from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handleChange, values } = useForm({
    titulo: 'Víde Padrão',
    url: 'https://www.youtube.com/watch?v=deC3ViFB_Hg&list=PLwlq4XZ8aTmfoyrR_VBsEVjt3Zaw0b6by&index=2&t=0s',
    categoria: 'Videos engraçados',
  });

  useEffect(() => {
    categorieRepositories
      .getAll()
      .then((info) => {
        setCategorias(info);
      });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>Cadastro de Video</h1>

        <form onSubmit={(e) => {
          e.preventDefault();

          // eslint-disable-next-line max-len
          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          videosRepositories.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              history.push('/');
            });
        }}
        >
          <FormField
            placeholder="Titulo do Vídeo"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            placeholder="URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormControl style={{
            width: 300, borderRadius: 10, background: '#fff', marginBottom: 20,
          }}
          >
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
            >
              {categorias.map((categoria) => (
                <MenuItem key={`${categoria.id}`} value={categoria.titulo}>
                  {categoria.titulo}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" color="primary" variant="contained">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;
