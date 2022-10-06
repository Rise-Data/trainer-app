const baseUrl = "https://app-trainer-api-221006010913.azurewebsites.net/api"

export default services = {
    trainer: {
        baseTrainer: `${baseUrl}/trainer`,
        loginTrainer: `${baseUrl}/trainer/login`,
    },
    member: {
        baseMember: `${baseUrl}/member`,
        getByTrainer: `${baseUrl}/member/trainer`,
        getByIds: `${baseUrl}/member/ids`,
    },
    training: {
        baseTraining: `${baseUrl}/training`,
        getByTrainer: `${baseUrl}/training/trainer`,
        getByMember: `${baseUrl}/training/member`,
    },
    exercise: {
        baseExercise: `${baseUrl}/exercise`,
        getByTraining: `${baseUrl}/exercise/training`,
        getByIds: `${baseUrl}/exercise/ids`,
    },
    exerciseType: {
        baseExerciseType: `${baseUrl}/exerciseType`,
    }
}