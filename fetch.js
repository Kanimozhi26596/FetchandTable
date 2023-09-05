
function fetchTable(){
    let active = document.getElementById("active");
    active.innerText = " ";
    let inputData = document.querySelector("select").value;
    let caption = document.createElement("h2");
    caption.innerText = `Showing for ${inputData}`;
    caption.classList = "caption"
    active.appendChild(caption);

  if(inputData == "Active"){
        let tableTag = document.createElement("table");
        tableTag.classList = "tableTag"
        let tableRow = document.createElement("tr");
        let capsuleid = document.createElement("th");
        capsuleid.classList = "capsuleId";
        capsuleid.innerText = "capsule_id"
        tableRow.appendChild(capsuleid);
        let noofmission = document.createElement("th");
        noofmission.classList = "noOfmissions";
        noofmission.innerText = "No_Of_Missions";
        tableRow.appendChild(noofmission);
        let details = document.createElement("th");
        details.classList = "Details";
          tableRow.appendChild(details);
        tableTag.appendChild(tableRow);
        details.innerText = "Details"
    fetch('JSON/Json.json')
        .then(response => response.json())
        .then(data => {
            data.active.forEach((val)=>{
            let tabrow = document.createElement('tr');
            let tabdata = document.createElement("td");
            tabdata.innerText = val.capsule_id;
            tabrow.appendChild(tabdata);
            let tabledata1 = document.createElement("td");
            tabledata1.innerText = val.no_of_missions;
            tabrow.appendChild(tabledata1);
            let tabledata2 = document.createElement("td");
            tabledata2.innerText = val.details;
            tabrow.appendChild(tabledata2);
            tableTag.appendChild(tabrow);
            active.appendChild(tableTag);
            
        })
      
        
    }).catch(error => {
        console.error('Error:' , error);
    })
  }
else{
    let outputData = document.createElement("h4");
    outputData.classList = "outputData"
    outputData.innerText = `No data's found`;
    active.appendChild(outputData);
}
}