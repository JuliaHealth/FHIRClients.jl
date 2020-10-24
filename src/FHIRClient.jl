module FHIRClient

import Base64
import Dates
import HTTP
import JSON3
import SaferIntegers
import StructTypes
import TimeZones

include("types.jl")

include("r4.jl")

include("authentication.jl")
include("fhir-to-julia.jl")
include("headers.jl")
include("requests.jl")

end # end module FHIRClient
