const getFirstUrlParam = (pUrl) => {
  const expReg = /\/.{1,}?\//gi;
  let arrayUrl = [];
  let result = '';

  arrayUrl = pUrl.match(expReg);
  result = arrayUrl[0].replace(/\//gi, '');
  console.log({ result });
  return result;
};

export default getFirstUrlParam;
