function Footer({ todos }) {
  const total = todos.length;

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = total - completed;

  return (
    <footer>
      <p>Total : {total}</p>
      <p>Completed : {completed}</p>
      <p>Pending : {pending}</p>
    </footer>
  );
}

export default Footer;