import json

severity_mapping = {
    "Critical": "BLOCKER",
    "High": "CRITICAL",
    "Medium": "MAJOR",
    "Low": "MINOR",
    "Unknown": "INFO"  # Default to INFO if severity is unknown
}


def convert_grype_to_sonarqube(grype_file, output_file):
    with open(grype_file, 'r') as f:
        grype_data = json.load(f)

    sonar_issues = {
        "issues": []
    }


    for match in grype_data.get('matches', []):
        cve = match['vulnerability']['id']
        grype_severity = match['vulnerability']['severity']
        severity = severity_mapping.get(grype_severity, "INFO")
        # severity = match['vulnerability']['severity'].upper()
        description = match['vulnerability'].get('description', 'No description available.')
        package_name = match['artifact']['name']

        issue = {
            "engineId": "grype",
            "ruleId": cve,
            "severity": severity,
            "type": "VULNERABILITY",
            "primaryLocation": {
                "message": description,
                "filePath": package_name,
                "textRange": {
                    "startLine": 1,
                    "endLine": 1
                }
            }
        }
        sonar_issues['issues'].append(issue)

    with open(output_file, 'w') as out_f:
        json.dump(sonar_issues, out_f, indent=2)

# Example usage
convert_grype_to_sonarqube('grype.json', 'g2sonar-issues.json')
