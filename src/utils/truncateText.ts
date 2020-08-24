export const truncateText = ({
  text,
  limit = 150,
}: {
  text: string;
  limit?: number;
}): string => {
  return text.length > limit ? `${text.slice(0, limit - 3)}...` : text;
};
