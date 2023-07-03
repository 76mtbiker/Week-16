

function Alert() {
  const variants = ['success'];

  return (
    <>
      {variants.map((variant) => (
        <div key={variant} className={`alert-${variant}`}>
          This is a {variant} alert—check it out!
        </div>
      ))}
    </>
  );
}

