import { Timer } from "../components/Timer";
import { Controls } from "../components/Controls";
import { usePomodoro } from "../context/PomodoroContext";

export default function TimerPage() {
  const { state, dispatch, start } = usePomodoro();
  const totalSeconds =
    state.mode === "focus"
      ? state.settings.focusMinutes * 60
      : state.mode === "shortBreak"
      ? state.settings.shortBreakMinutes * 60
      : state.settings.longBreakMinutes * 60;

  return (
    <section className="page">
      <h1 className="page-title">{state.mode.toUpperCase()}</h1>

      <Timer seconds={state.secondsLeft} totalSeconds={totalSeconds} />

      <Controls
        running={state.running}
        onStart={start}
        onPause={() => dispatch({ type: "PAUSE" })}
        onReset={() => dispatch({ type: "RESET" })}
        onSkip={() => dispatch({ type: "SKIP" })}
      />
    </section>
  );
}
