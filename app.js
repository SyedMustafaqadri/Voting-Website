document.addEventListener('DOMContentLoaded', function () {
    // Function to add a friend to the list
    function addFriend() {
        var friendNameInput = document.getElementById('Add Friends');
        var friendName = friendNameInput.value.trim();

        if (friendName !== "") {
            // Create a new row for friListTable
            var friListTable = document.querySelector('.friListTable');
            var friListRow = friListTable.insertRow();

            // Create cells for friend name and vote button
            var nameCell = friListRow.insertCell(0);
            var voteCell = friListRow.insertCell(1);

            // Set the friend name in the name cell
            nameCell.textContent = friendName;

            // Create a vote button in the vote cell
            var voteButton = document.createElement('button');
            voteButton.textContent = 'Vote';
            voteButton.addEventListener('click', function () {
                increaseVote(friendName);
            });

            voteCell.appendChild(voteButton);

            // Create a new row for voteProgTable
            var voteProgTable = document.querySelector('.voteProgTable');
            var voteProgRow = voteProgTable.insertRow();

            // Create cells for friend name and vote progress
            var progNameCell = voteProgRow.insertCell(0);
            var progVoteCell = voteProgRow.insertCell(1);

            // Set the friend name in the name cell of voteProgTable
            progNameCell.textContent = friendName;

            // Set the initial vote progress to 0
            progVoteCell.textContent = '0';
        }

        // Clear the input box after adding a friend
        friendNameInput.value = "";
    }

    // Function to increase the vote for a friend
    function increaseVote(friendName) {
        var voteProgTable = document.querySelector('.voteProgTable');

        // Find the row corresponding to the friend in voteProgTable
        var rows = voteProgTable.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');
            if (cells.length > 0 && cells[0].textContent === friendName) {
                // Increase the vote count in the second cell of the row
                var voteCount = parseInt(cells[1].textContent, 10);
                cells[1].textContent = (voteCount + 1).toString();
                break;
            }
        }
    }

    // Attach the addFriend function to the click event of the "Add Friends" button
    var addFriendButton = document.querySelector('.addFri');
    addFriendButton.addEventListener('click', addFriend);
});
