const Test = () => {
  return (
    <div>
      <form
        name="form"
        action="https://api.gbprimepay.com//v2/tokens/3d_secured"
        method="POST"
      >
        <input
          type="text"
          name="publicKey"
          value="ubcJ424zacPlbRHOx4HhMwT8RmspLgk2"
        />

        <input type="text" name="gbpReferenceNo" value="gbp11872188378389" />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};
export default Test;
