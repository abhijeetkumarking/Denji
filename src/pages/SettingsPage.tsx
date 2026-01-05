import { Settings } from "../components/Settings"
import { usePomodoro } from "../context/PomodoroContext"

export default function SettingsPage() {
  const { state, dispatch } = usePomodoro()

  return (
    <section className="page">
      <h1 className="page-title">Settings</h1>

      <Settings
        settings={state.settings}
        autoStartNext={state.autoStartNext}
        soundEnabled={state.soundEnabled}
        volume={state.volume}
        darkMode={state.darkMode}
        onToggleDarkMode={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
        onChange={(s) =>
          dispatch({ type: "UPDATE_SETTINGS", payload: s })
        }
        onToggleAutoStart={() =>
          dispatch({ type: "TOGGLE_AUTO_START" })
        }
        onToggleSound={() => dispatch({ type: "TOGGLE_SOUND" })}
        onVolumeChange={(v) =>
          dispatch({ type: "SET_VOLUME", payload: v })
        }
      />
    </section>
  )
}
