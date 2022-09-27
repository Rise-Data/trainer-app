const baseUrl = "" // http://ipv4:8080/api

// IPV4 -> IP address of the server.

export default services = {
    trainer: {
        baseTrainer: `${baseUrl}/trainer`,
        loginTrainer: `${baseUrl}/trainer/login`,
    },
    member: {
        baseMember: `${baseUrl}/member`,
        getByTrainer: `${baseUrl}/member/trainer`
    }
}