export const ProgressBar = ({ progress } : { progress: number }) => {
  return (
    <label>
      progress: %{progress}
      <progress value={progress} max={100} style={{ margin: '0 5px'}}></progress>
    </label>
  )
}