export const CONTAINER_SIZE = {
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export type ContainerSize = (typeof CONTAINER_SIZE)[keyof typeof CONTAINER_SIZE];