const event_brite_url = 'https://www.eventbriteapi.com/v3/users/me/?token=ERPIMFFWEBMKABMVLK3X';
testFunction();
async function testFunction(){
    const response = await fetch(event_brite_url);
    const data = await response.json();
    alert(data.id);
}