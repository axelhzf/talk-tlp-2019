export function Video(props) {
  const { src, ...restProps } = props;
  return (
    <video
      autoPlay={true}
      loop={true}
      muted
      {...restProps}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}