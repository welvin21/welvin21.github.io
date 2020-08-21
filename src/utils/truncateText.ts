export const truncateText = (text: string): string => {
  const LIMIT: number = 250;

  return text.length > LIMIT ? `${text.slice(0, LIMIT - 3)}...` : text;
};
