function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Installations</th>
          <th>React</th>
          <th>Styling</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.Installations}</td>
            <td>{row.React}</td>
            <td>{row.Styling}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


