export default function destructuringObj(obj) {
  const result = [];
  const { special } = obj;
  special.forEach((item) => {
    const { id, name, icon, description = 'Описание недоступно' } = item;
    result.push(
      {
      id, name, icon, description,
      },
    );
  });
  return result;
}
