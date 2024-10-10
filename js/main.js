function gradientColor(stat) {
    if (stat <= 94) return '#dc3545';
    else if (stat <= 95) return '#D36132';
    else if (stat <= 96) return '#CA9830';
    else if (stat <= 97) return '#B7C12E';
    else if (stat <= 98) return '#8ab834';
    else if (stat < 100) return '#2ba26c';
    else if (stat === 100) return '#198754';
}

function timeDifferenceWithEpoch(currentEpoch, previousEpoch) {
    var now = new Date(currentEpoch * 1000);
    var updated = new Date(previousEpoch * 1000);
    return timeDifference(now, updated);
}

function timeDifferenceInSeconds(current, previous) {
    return (current - previous) / 1000;
}

function timeDifference(current, previous) {
    var value = 0;
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        value = Math.round(elapsed / 1000);
        return value + (value === 1 ? ' second ago' : ' seconds ago');
    } else if (elapsed < msPerHour) {
        value = Math.round(elapsed / msPerMinute);
        return value + (value === 1 ? ' minute ago' : ' minutes ago');
    } else if (elapsed < msPerDay) {
        value = Math.round(elapsed / msPerHour);
        return value + (value === 1 ? ' hour ago' : ' hours ago');
    } else if (elapsed < msPerMonth) {
        value = Math.round(elapsed / msPerDay);
        return value + (value === 1 ? ' day ago' : ' days ago');
    } else if (elapsed < msPerYear) {
        value = Math.round(elapsed / msPerMonth);
        return 'approximately ' + value + (value === 1 ? ' month ago' : ' months ago');
    } else {
        value = Math.round(elapsed / msPerYear);
        return 'approximately ' + value + (value === 1 ? ' year ago' : ' years ago');
    }
}

function updateGradient() {
    // Implementation of updateGradient function
    // ... (copy the entire function from the original code)
}

function updateParsed() {
    // Implementation of updateParsed function
    // ... (copy the entire function from the original code)
}

function parseXml(xmlStr) {
    return new window.DOMParser().parseFromString(xmlStr, "text/xml");
}

// Add other functions from the original code here
// Such as: smallCaps, mirrored, flipped, slashed, bent, japanese, circled, underlined, curly, hebrew, yoda, hieroglyph, delta, superscript, dots, smeared

function fontGenerator() {
    // Implementation of fontGenerator function
    // ... (copy the entire function from the original code)
}

function chunkify(a, n, balanced) {
    // Implementation of chunkify function
    // ... (copy the entire function from the original code)
}

// Add any other utility functions here

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize your app here
    updateParsed();

    // Add event listeners for buttons
    document.getElementById('undoButton').addEventListener('click', function() {
        // Implement undo functionality
    });

    document.getElementById('boldButton').addEventListener('click', function() {
        // Implement bold functionality
    });

    document.getElementById('italicButton').addEventListener('click', function() {
        // Implement italic functionality
    });

    document.getElementById('colorButton').addEventListener('click', function() {
        // Implement color functionality
    });

    document.getElementById('gradientButton').addEventListener('click', function() {
        // Implement gradient functionality
    });

    document.getElementById('sizeButton').addEventListener('click', function() {
        // Implement size functionality
    });

    document.getElementById('symbolsButton').addEventListener('click', function() {
        // Implement symbols functionality
    });

    document.getElementById('flagsButton').addEventListener('click', function() {
        // Implement flags functionality
    });

    // Add event listener for profile code input
    document.getElementById('profileCode').addEventListener('input', updateParsed);

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});