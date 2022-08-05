input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Happy)
})
input.setSoundThreshold(SoundThreshold.Loud, 150)
