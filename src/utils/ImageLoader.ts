const imageLoader = (src: string, width: number, quality = 75) => {
  return `${src}?w=${width}&q=${quality}`;
}

export default imageLoader;