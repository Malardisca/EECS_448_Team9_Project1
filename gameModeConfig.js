function main(gameType)
{
    if(gameType.id == 'local')
    {
        const localGameScript = document.createElement('script');
        localGameScript.type = 'text/javascript';
        localGameScript.src = 'againstLocalPlayer.js';
        document.querySelector('head').appendChild(localGameScript);

    }
    else if(gameType.id === 'botGame')
    {
        const botGameScript = document.createElement('script');
        botGameScript.type = 'text/javascript';
        botGameScript.src = 'againstBot.js';

        document.querySelector('head').appendChild(botGameScript);
    }
    
}
