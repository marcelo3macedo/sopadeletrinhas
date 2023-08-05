function isCorrectAnswer(session:any, index:number, option:string) {
    if (!session || session.length < index) {return false;}

    const activeSession = session[index];
    const { slug } = activeSession;

    if (slug !== option) {return false;}

    return true;
}

export {
    isCorrectAnswer
};

