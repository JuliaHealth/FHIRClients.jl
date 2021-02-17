var documenterSearchIndex = {"docs":
[{"location":"generate/","page":"Auto-generating the type definitions","title":"Auto-generating the type definitions","text":"CurrentModule = Generate","category":"page"},{"location":"generate/#Auto-generating-the-type-definitions","page":"Auto-generating the type definitions","title":"Auto-generating the type definitions","text":"","category":"section"},{"location":"generate/#Example-usage","page":"Auto-generating the type definitions","title":"Example usage","text":"","category":"section"},{"location":"generate/","page":"Auto-generating the type definitions","title":"Auto-generating the type definitions","text":"using Generate\nfhir_version = :R4\nurl = \"https://www.hl7.org/fhir/$(fhir_version)/definitions.json.zip\"\njson_definitions = Generate.download_fhir_json_schema(url);\nschema_string = json_definitions[\"fhir.schema.json.zip\"][\"fhir.schema.json\"];\noutput_file = \"autogenerated-$(fhir_version).jl\"\nGenerate.output_fhir_types(; schema_string = schema_string, output_file = output_file)","category":"page"},{"location":"generate/#Index","page":"Auto-generating the type definitions","title":"Index","text":"","category":"section"},{"location":"generate/","page":"Auto-generating the type definitions","title":"Auto-generating the type definitions","text":"Modules = [Generate]","category":"page"},{"location":"generate/#Docs","page":"Auto-generating the type definitions","title":"Docs","text":"","category":"section"},{"location":"generate/","page":"Auto-generating the type definitions","title":"Auto-generating the type definitions","text":"Modules = [Generate]","category":"page"},{"location":"generate/#Generate.download_fhir_json_schema-Tuple{AbstractString}","page":"Auto-generating the type definitions","title":"Generate.download_fhir_json_schema","text":"download_fhir_json_schema(url::AbstractString)\n\nDownload and unzip the file at url.\n\nExample\n\njulia> url = \"https://www.hl7.org/fhir/R4/definitions.json.zip\"\njulia> Generate.download_fhir_json_schema(url)\n\n\n\n\n\n","category":"method"},{"location":"generate/#Generate.output_fhir_types-Tuple{}","page":"Auto-generating the type definitions","title":"Generate.output_fhir_types","text":"output_fhir_types(; output_file, schema_string)\n\nGenerate the FHIR types and save them in the specified output file.\n\n\n\n\n\n","category":"method"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = FHIRClient","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Index","page":"API","title":"Index","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [FHIRClient]","category":"page"},{"location":"api/#Docs","page":"API","title":"Docs","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [FHIRClient]","category":"page"},{"location":"api/#FHIRClient.Authentication","page":"API","title":"FHIRClient.Authentication","text":"Supertype of the various authentication types.\n\nSummary\n\nabstract type Authentication <: Any\n\n\n\n\n\n","category":"type"},{"location":"api/#FHIRClient.BaseURL","page":"API","title":"FHIRClient.BaseURL","text":"The base URL for a FHIR server.\n\nThe base URL is also called the \"Service Root URL\"\n\nSummary\n\nstruct BaseURL <: Any\n\nFields\n\nuri :: HTTP.URIs.URI\n\n\n\n\n\n","category":"type"},{"location":"api/#FHIRClient.BaseURL-Tuple{AbstractString}","page":"API","title":"FHIRClient.BaseURL","text":"BaseURL(base_url::AbstractString)\n\nConstruct a BaseURL object given the base URL.\n\nThe base URL is also called the \"Service Root URL\"\n\n\n\n\n\n","category":"method"},{"location":"api/#FHIRClient.Client","page":"API","title":"FHIRClient.Client","text":"A FHIR client.\n\nSummary\n\nstruct Client{V <: FHIRVersion, A <: Authentication} <: Any\n\nFields\n\nfhir_version :: V\nbase_url :: BaseURL\nauth :: A\n\n\n\n\n\n","category":"type"},{"location":"api/#FHIRClient.FHIRVersion","page":"API","title":"FHIRClient.FHIRVersion","text":"Subtypes of FHIRVersion are singleton structs that correspond to versions of the FHIR specification.\n\nSummary\n\nabstract type FHIRVersion <: Any\n\n\n\n\n\n","category":"type"},{"location":"api/#FHIRClient.R4","page":"API","title":"FHIRClient.R4","text":"FHIR version R4.\n\nSummary\n\nabstract type Authentication <: Any\n\n\n\n\n\n","category":"type"},{"location":"api/#FHIRClient.request-Union{Tuple{T}, Tuple{Type{T},FHIRClient.Client,AbstractString,AbstractString}} where T","page":"API","title":"FHIRClient.request","text":"request(T, client, verb, path; query, body, headers, kwargs...)\nrequest(T, client, verb, path; query, headers, kwargs...)\nrequest(T, client, verb, path; body, headers, kwargs...)\nrequest(T, client, verb, path; headers, kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"api/#FHIRClient.request_json-Tuple{FHIRClient.Client,AbstractString,AbstractString}","page":"API","title":"FHIRClient.request_json","text":"request_json(client, verb, path; query, body, headers)\nrequest_json(client, verb, path; query, headers)\nrequest_json(client, verb, path; body, headers)\nrequest_json(client, verb, path; headers)\n\n\n\n\n\n","category":"method"},{"location":"api/#FHIRClient.request_raw-Tuple{FHIRClient.Client,AbstractString,AbstractString}","page":"API","title":"FHIRClient.request_raw","text":"request_raw(client, verb, path; query, body, headers)\nrequest_raw(client, verb, path; query, headers)\nrequest_raw(client, verb, path; body, headers)\nrequest_raw(client, verb, path; headers)\n\n\n\n\n\n","category":"method"},{"location":"examples/","page":"Examples","title":"Examples","text":"CurrentModule = FHIRClient","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#Basic-example","page":"Examples","title":"Basic example","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"using FHIRClient\nusing FHIRClient.R4Types\nfhir_version = FHIRClient.R4()\nbase_url = FHIRClient.BaseURL(\"https://hapi.fhir.org/baseR4\")\nauth = FHIRClient.AnonymousAuth()\nclient = FHIRClient.Client(fhir_version, base_url, auth)\nrequest_path = \"/Patient/1476056\"\np = FHIRClient.request(Patient, client, \"GET\", request_path)\ntypeof(p)\nfieldnames(Patient)\np.name","category":"page"},{"location":"installation/","page":"Installing FHIRClient","title":"Installing FHIRClient","text":"CurrentModule = FHIRClient","category":"page"},{"location":"installation/#Installing-FHIRClient","page":"Installing FHIRClient","title":"Installing FHIRClient","text":"","category":"section"},{"location":"installation/","page":"Installing FHIRClient","title":"Installing FHIRClient","text":"To install FHIRClient, open Julia and run the following commands:","category":"page"},{"location":"installation/","page":"Installing FHIRClient","title":"Installing FHIRClient","text":"julia> import Pkg\n\njulia> Pkg.add(\"FHIRClient\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = FHIRClient","category":"page"},{"location":"#FHIRClient","page":"Home","title":"FHIRClient","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"FHIRClient provides a Julia client for connecting to servers that support the Fast Healthcare Interoperability Resources (FHIR) specification and building SMART on FHIR applications.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The source code for this package is available in the GitHub repository.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The following tables show the mapping between Julia packages and standards/specifications:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Julia Package Standard/Specification Description\nFHIRClient.jl FHIR Fast Healthcare Interoperability Resources. Web standard for health interop.\nSMARTAppLaunch.jl SMART App Launch User-facing apps that connect to EHRs and health portals.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"We currently do not implement the following; however, we plan to implement them in the future:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Standard/Specification Description\nCDS Hooks Clinical Decision Support Hooks. Web standard for CDS in the EHR workflow.\nFHIR Bulk Data Access (Flat FHIR) FHIR export API for large-scale data access.\nSMART Backend Services Server-to-server FHIR connections.","category":"page"},{"location":"","page":"Home","title":"Home","text":"These descriptions are taken from the SMART on FHIR technical documentation.","category":"page"}]
}
