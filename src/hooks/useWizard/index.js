import Wizard from '../../components/Wizard'

export const useWizard = (currentStepIndex, wizardContent, stepContentEnum) => {
  return {
    Wizard: <Wizard currentStepIndex={currentStepIndex} content={wizardContent} />,
    Content: stepContentEnum[currentStepIndex]
  }
}

export default useWizard