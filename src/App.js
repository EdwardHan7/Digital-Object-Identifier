import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoiInfo } from './redux/slices/doiSlice';
import CustomizedInputBase from './components/CustomizedInputBase';
import ArticleInfo from './components/ArticleInfo';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { info: doiInfo, status, error } = useSelector(state => state.doi);

  const handleFetchDoi = (doi) => {
    dispatch(fetchDoiInfo(doi));
  };

  return (
    <div className="app-container">
      <h1>DOI Information Fetcher</h1>
      <CustomizedInputBase onFetch={handleFetchDoi} />
      <br></br>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {doiInfo && <ArticleInfo doiInfo={doiInfo} />}
    </div>
  );
}

export default App;
