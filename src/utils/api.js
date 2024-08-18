export const fetchTokenData = async (address) => {
    const options = { method: "GET", headers: { accept: "*/*" } };
    try {
      const response = await fetch(
        `https://api.gopluslabs.io/api/v1/token_security/56?contract_addresses=${address}`,
        options
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };
  